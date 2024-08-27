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
            envBothHands: jobPost.envBothHands.substring(
              0,
              jobPost.envBothHands.indexOf("작")
            ),
            envLiftPower: jobPost.envLiftPower.substring(
              0,
              jobPost.envLiftPower.indexOf("g") + 1
            ),
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

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setSearchCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            <JobPostListFilter filterOptions={jobPostListSearchOptions} />
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
