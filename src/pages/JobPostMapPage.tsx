import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/Header";
import SearchOptions from "../components/common/SearchOptions";
import JobPostList from "../components/jobPostList/JobPostList";
import JobPostMap from "../components/map/JobPostMap";
import {
  jobPostListColumns,
  JobPostListData,
  SearchCriteria,
} from "../types/JobPostDataType";

const JobPostMapPage = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    compAddr: "",
    jobNm: "",
    empType: "",
    envEyesight: "",
    envLiftPower: "",
    envBothHands: "",
  });
  const [jobPosts, setJobPosts] = useState<JobPostListData[]>([]);
  const [visibleJobPosts, setVisibleJobPosts] = useState<JobPostListData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const [mapCoordinates, setMapCoordinates] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 37.5665, // 초기 좌표
    longitude: 126.978,
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log("mapCoordinates", mapCoordinates);
  }),
    [mapCoordinates];

  useEffect(() => {
    const fetchJobPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/job_posts/", {
          params: {
            ...searchCriteria,
            start: (currentPage - 1) * itemsPerPage,
            limit: itemsPerPage,
          },
        });

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
            envBothHands: jobPost.envBothHands.substring(
              0,
              jobPost.envBothHands.indexOf("작")
            ),
            envLiftPower: jobPost.envLiftPower.substring(
              0,
              jobPost.envLiftPower.indexOf("g") + 1
            ),
          };
        });

        setJobPosts(jobPosts);
        setTotalItemsCount(response.data.total_count);
        setLoading(false);
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
  }, [searchCriteria, currentPage, itemsPerPage]);

  const handleChange = (event: SelectChangeEvent<string>) => {
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
    navigate(`/job-post/${jobPost.id}`, { state: { jobPost } });
  };

  if (loading) return <div>Loading...</div>;
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
            />
          </StyledMapContanier>
          <SearchOptions
            searchCriteria={searchCriteria}
            handleChange={handleChange}
          />
          <div>
            <StyledListHeader>
              <Text>검색결과</Text>
              <SelectBox>tt</SelectBox>
            </StyledListHeader>
            <JobPostList
              columns={jobPostListColumns}
              data={visibleJobPosts}
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
  padding-left: 320px;
  padding-right: 320px;
  margin: 0;
  box-sizing: border-box;
  max-width: 1040px;
  min-width: 1040px;
`;

const StyledContents = styled.div``;

const StyledMapContanier = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 1040px;
  min-width: 1040px;
  height: 100%;
`;

const StyledListHeader = styled.div`
  max-width: 1040px;
  min-width: 1040px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
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

const SelectBox = styled.div`
  text-align: right; /* 오른쪽 정렬 */
`;
