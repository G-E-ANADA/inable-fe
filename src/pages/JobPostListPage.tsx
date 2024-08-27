import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { fetchJobPostList } from "../api/postsApi";
import Header from "../components/Header";
import JobPostList from "../components/jobPostList/JobPostList";
import {
  jobPostListColumns,
  jobPostListSearchOptions,
  JobPostListData,
  ListSearchCriteria,
} from "../types/PostDataType";
import JobPostListFilter from "../components/jobPostList/JobPostListFilter";

const JobPostListPage = () => {
  const [searchCriteria, setSearchCriteria] = useState<ListSearchCriteria>({
    empType: "",
    enterType: "",
    searchRegion: "",
    searchJobCategory: "",
    searchEnvEyesight: "",
    searchEnvLstnTalk: "",
    searchEnvLiftPower: "",
    searchEnvBothHands: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [jobPosts, setJobPosts] = useState<JobPostListData[]>([]);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const [showLoading, setShowLoading] = useState<boolean>(true); // 로딩 상태
  const [sort, setSort] = useState<string>("regDt");

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

  const { isLoading, error } = useQuery(
    ["jobPosts", searchCriteria, currentPage, itemsPerPage],
    () =>
      fetchJobPostList({
        ...searchCriteria,
        start: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      }),
    {
      onSuccess: (data) => {
        const processedData = data.job_posts.map(
          (jobPost: JobPostListData) => ({
            ...jobPost,
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
          })
        );

        setJobPosts(processedData);
        setTotalItemsCount(data.total_count);
        setShowLoading(false); // 데이터 로딩 완료 후 로딩 상태 해제
      },
      onError: () => setShowLoading(false), // 에러 발생 시 로딩 상태 해제
    }
  );

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowLoading(true);
      }, 200); // 200ms 후에 로딩 상태 표시

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleFilterChange = (filter: string, value: string) => {
    const filterValueMap: { [key: string]: { [key: string]: string } } = {
      searchRegion: {
        전체: "",
      },
      searchJobCategory: {
        무관: "",
      },
      searchEnvLstnTalk: {
        무관: "",
      },
      searchEnvEyesight: {
        무관: "",
      },
      searchEnvLiftPower: {
        무관: "",
        "5Kg 이내 가능": "5Kg 이내",
        "5~20Kg 이내 가능": "5~20Kg 이내",
        "20Kg 이상 가능": "20Kg 이상",
      },
      searchEnvBothHands: {
        무관: "",
        "양손작업 가능": "양손작업",
        "한손보조작업 가능": "한손보조작업",
        "한손작업 가능": "한손작업",
      },
    };

    const currentFilterMap = filterValueMap[filter] || {};
    const filterValue =
      currentFilterMap[value] !== undefined ? currentFilterMap[value] : value;

    setSearchCriteria((prev) => ({
      ...prev,
      [filter]: filterValue,
    }));
    setCurrentPage(1);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setSort(value);
    setCurrentPage(1);
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

  if (showLoading)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <StyledSkeletonContainer>
          <StyledHeaderSkeleton variant="rectangular" />
          <div style={{ width: "100%" }}>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <StyledRowSkeleton key={index} variant="rectangular" />
              ))}
          </div>
        </StyledSkeletonContainer>
      </div>
    );

  if (error) return <div>Error: {error as string}</div>;

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledContents>
          <StyledTitle>실시간 채용 정보</StyledTitle>
          <StyledSubTitle>실시간 채용 정보를 확인해 보세요</StyledSubTitle>
          <StyledJobPostListFilter>
            <JobPostListFilter
              filterOptions={jobPostListSearchOptions}
              onFilterChange={handleFilterChange}
            />
          </StyledJobPostListFilter>
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
            data={jobPosts}
            currentPage={currentPage}
            totalItemsCount={totalItemsCount}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onRowClick={handleRowClick}
          />
        </StyledContents>
      </StyledContainer>
    </>
  );
};

export default JobPostListPage;

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledContents = styled.div`
  margin: 0 auto;
  width: 1280px;
`;

const StyledTitle = styled.div`
  padding-top: 60px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 2;
`;

const StyledSubTitle = styled.div`
  text-align: center;
  color: #707070;
  font-size: 18px;
  font-weight: 400;
`;

const StyledSkeletonContainer = styled.div`
  padding-left: 320px;
  padding-right: 320px;
  width: 100%;
  min-width: 1040px;
  overflow-x: auto;
  align-items: center;
  flex-direction: column;
  display: flex;
  padding-left: 320px;
  padding-right: 320px;
  padding-bottom: 80px;
`;

const StyledHeaderSkeleton = styled(Skeleton)`
  width: 100%;
  height: 63px; // 헤더 높이
  border-radius: 16px;
  border: 1px solid #c5c5c5;
  margin-bottom: 8px;
`;

const StyledRowSkeleton = styled(Skeleton)`
  width: 100%;
  height: 27px; // 데이터 로우 높이
  border-radius: 16px;
  border: 1px solid #c5c5c5;
  margin-bottom: 4px;
`;

const StyledJobPostListFilter = styled.div`
  margin-bottom: 60px;
`;

const StyledListHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
