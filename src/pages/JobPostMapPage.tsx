import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/Header";
import JobPostList from "../components/jobPostList/JobPostList";
import JobPostMap from "../components/map/JobPostMap";
import MapSearchOptions from "../components/map/MapSearchOptions";
import {
  jobPostListColumns,
  JobPostListData,
  MapSearchCriteria,
} from "../types/PostDataType";

const JobPostMapPage = () => {
  const [searchCriteria, setSearchCriteria] = useState<MapSearchCriteria>({
    searchRegion: "",
    searchJobCategory: "",
    empType: "",
    salaryType: "",
    searchEnvBothHands: "",
    searchEnvEyesight: "",
    searchEnvLiftPower: "",
  });
  const [jobPosts, setJobPosts] = useState<JobPostListData[]>([]);
  const [currentJobPosts, setCurrentJobPosts] = useState<JobPostListData[]>([]);
  const [visibleJobPosts, setVisibleJobPosts] = useState<JobPostListData[]>([]);
  const [visibleJobPostsCounts, setVisibleJobPostsCounts] = useState<number>(0);
  const [sort, setSort] = useState<string>("regDt");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mapCoordinates, setMapCoordinates] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 37.5665, // 초기 좌표
    longitude: 126.978,
  });

  const navigate = useNavigate();

  const valueMapping: { [key: string]: { [key: string]: string } } = {
    searchEnvLstnTalk: {
      "-": "-",
      "간단한 듣고 말하기": "간단히 가능",
      "어려움 없음": "어려움 없음",
      어려움: "어려움",
    },
    searchEnvEyesight: {
      "-": "-",
      "일상적 활동 가능": "일상",
      "비교적 큰 인쇄물 가능": "큰 인쇄물",
      "아주 작은 글씨 가능": "작은 글씨",
    },
    searchEnvLiftPower: {
      "-": "-",
      "5Kg 이내": "5Kg",
      "5~20Kg 이내": "5~20Kg",
      "20Kg 이상": "20Kg이상",
    },
    searchEnvBothHands: {
      "-": "-",
      양손작업: "양손",
      한손보조작업: "한손보조",
      한손작업: "한손",
    },
  };

  useEffect(() => {
    const fetchJobPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:8000/job_posts/",
          {}
        );

        const jobPosts = response.data.job_posts.map((jobPost: any) => {
          const latitude = parseFloat(jobPost.latitude);
          const longitude = parseFloat(jobPost.longitude);

          return {
            ...jobPost,
            latitude,
            longitude,
            area:
              jobPost.compAddr.split(" ")[0] +
              " " +
              jobPost.compAddr.split(" ")[1],
            searchEnvLstnTalk:
              valueMapping.searchEnvLstnTalk[jobPost.searchEnvLstnTalk] ||
              jobPost.searchEnvLstnTalk,
            searchEnvEyesight:
              valueMapping.searchEnvEyesight[jobPost.searchEnvEyesight] ||
              jobPost.searchEnvEyesight,
            searchEnvLiftPower:
              valueMapping.searchEnvLiftPower[jobPost.searchEnvLiftPower] ||
              jobPost.searchEnvLiftPower,
            searchEnvBothHands:
              valueMapping.searchEnvBothHands[jobPost.searchEnvBothHands] ||
              jobPost.searchEnvBothHands,
          };
        });

        setJobPosts(jobPosts);
        setTotalItemsCount(response.data.total_count);
        setLoading(false);

        // 초기 로드 시 visibleJobPosts 업데이트
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentJobPosts(jobPosts.slice(startIndex, endIndex));

        setVisibleJobPosts(jobPosts);
        setVisibleJobPostsCounts(response.data.total_count);
      } catch (err) {
        if (axios.isAxiosError(err) && err.message) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
        setLoading(false);
      }
    };

    fetchJobPosts();
  }, []);

  useEffect(() => {
    for (const key in searchCriteria) {
      if (searchCriteria[key as keyof MapSearchCriteria] === "무관") {
        searchCriteria[key as keyof MapSearchCriteria] = "";
      }
    }
    const filteredJobPosts = visibleJobPosts.filter((jobPost) => {
      return (
        (!searchCriteria.searchRegion ||
          jobPost.searchRegion.includes(searchCriteria.searchRegion)) &&
        (!searchCriteria.searchJobCategory ||
          jobPost.searchJobCategory === searchCriteria.searchJobCategory) &&
        (!searchCriteria.empType ||
          jobPost.empType === searchCriteria.empType) &&
        (!searchCriteria.salaryType ||
          jobPost.salaryType === searchCriteria.salaryType) &&
        (!searchCriteria.searchEnvBothHands ||
          jobPost.searchEnvBothHands === searchCriteria.searchEnvBothHands) &&
        (!searchCriteria.searchEnvEyesight ||
          jobPost.searchEnvEyesight === searchCriteria.searchEnvEyesight) &&
        (!searchCriteria.searchEnvLiftPower ||
          jobPost.searchEnvLiftPower === searchCriteria.searchEnvLiftPower) &&
        true
      );
    });

    if (filteredJobPosts) {
      const sortedVisibleJobPosts = sortData(filteredJobPosts, sort);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentJobPosts(sortedVisibleJobPosts.slice(startIndex, endIndex));
      setTotalItemsCount(filteredJobPosts.length);
    }
  }, [searchCriteria, visibleJobPosts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchCriteria]);

  const handlePaging = () => {
    setCurrentPage(1);
  };

  const handleMapSearchOptionChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setSearchCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleRowClick = (jobPost: JobPostListData) => {
    navigate(`/job-post/${jobPost.postId}`, { state: { jobPost } });
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setSort(value);

    const sortedVisibleJobPosts = sortData(visibleJobPosts, value);
    setVisibleJobPosts([...sortedVisibleJobPosts]);
    setCurrentPage(1);
  };

  const sortData = (data: JobPostListData[], sort: string) => {
    return data.sort((a, b) => {
      if (sort === "regDt") {
        return parseInt(a.regDt) - parseInt(b.regDt);
      } else if (sort === "endDt") {
        const dateA = new Date(a.endDate).getTime();
        const dateB = new Date(b.endDate).getTime();
        return dateA - dateB;
      }
      return 0;
    });
  };

  if (loading) {
    return (
      <StyledLoadingContainer>
        <CircularProgress />
      </StyledLoadingContainer>
    );
  }
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header></Header>
      <StyledContainer>
        <StyledContents>
          <StyledMapContanier>
            <JobPostMap
              coordinates={mapCoordinates}
              jobPostData={jobPosts}
              setSortedJobPostData={setVisibleJobPosts}
              handlePaging={handlePaging}
              setVisibleJobPostsCounts={setVisibleJobPostsCounts}
            />
          </StyledMapContanier>
          <MapSearchOptions
            mapSearchCriteria={searchCriteria}
            handleChange={handleMapSearchOptionChange}
          />
          <div>
            <StyledListHeader>
              <Text>검색결과</Text>
              <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                <InputLabel id="sort-label">정렬</InputLabel>
                <Select
                  labelId="sort-label"
                  id="sort-select"
                  value={sort}
                  label="정렬"
                  onChange={handleSortChange}
                >
                  <MenuItem value={"regDt"}>최신순</MenuItem>
                  <MenuItem value={"endDt"}>마감순</MenuItem>
                </Select>
              </FormControl>
            </StyledListHeader>
            <JobPostList
              columns={jobPostListColumns}
              data={currentJobPosts}
              currentPage={currentPage}
              totalItemsCount={totalItemsCount}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              onRowClick={handleRowClick}
            />
          </div>
        </StyledContents>
      </StyledContainer>
    </>
  );
};

export default JobPostMapPage;

const StyledContainer = styled.div`
  width: 100%;
  height: 1080px;
  position: relative;
`;

const StyledContents = styled.div`
  margin: 0 auto;
  width: 1280px;
`;

const StyledMapContanier = styled.div``;

const StyledListHeader = styled.div`
  display: flex;
  align-items: center; /* 세로 정렬을 가운데로 */
  justify-content: space-between; /* 왼쪽과 오른쪽 끝으로 배치 */
  text-align: left;
  font-size: 21px;
  color: #191919;
  margin-bottom: 24px;
`;

const Text = styled.div`
  flex-grow: 1; /* 나머지 공간을 차지 */
  text-align: left; /* 왼쪽 정렬 */
`;

const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
