import { Container, SelectChangeEvent } from "@mui/material";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { fetchJobPostList } from "../api/jobPosts";
import Header from "../components/Header";
import JobPostList from "../components/jobPostList/JobPostList";
import {
  jobPostListColumns,
  JobPostListData,
  SearchCriteria,
} from "../types/JobPostDataType";

const JobPostListPage = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    compAddr: "",
    jobNm: "",
    empType: "",
    envEyesight: "",
    envLiftPower: "",
    envBothHands: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [jobPosts, setJobPosts] = useState<JobPostListData[]>([]);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const [showLoading, setShowLoading] = useState<boolean>(true); // 로딩 상태

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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setItemsPerPage(parseInt(event.target.value as string, 10));
    setCurrentPage(1);
  };

  const handleRowClick = (jobPost: JobPostListData) => {
    navigate(`/job-post/${jobPost.id}`, { state: { jobPost } });
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
      <Container>
        <Header />
        <div
          style={{
            maxWidth: "1040px",
            minWidth: "1040px",
            marginTop: "60px",
            marginBottom: "44px",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: "0",
              textAlign: "center",
              color: "black",
              fontSize: 24,
              fontWeight: "500",
              lineHeight: 2,
              whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
            }}
          >
            실시간 채용 정보
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
              color: "#707070",
              fontSize: 18,
              fontWeight: "400",
              whiteSpace: "nowrap", // 텍스트 줄바꿈 방지
            }}
          >
            실시간 채용 정보를 확인해 보세요
          </div>
        </div>
        <div>검색 필터</div>
        <div>검색 조건 확인</div>
        <div>
          <div>검색결과</div>
        </div>
        <JobPostList
          columns={jobPostListColumns}
          data={jobPosts}
          currentPage={currentPage}
          totalItemsCount={totalItemsCount}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          onRowClick={handleRowClick}
        />
      </Container>
    </>
  );
};

export default JobPostListPage;

const Container = styled.div`
  padding-left: 320px;
  padding-right: 320px;
  padding-bottom: 80px;
`;

const StyledSkeletonContainer = styled.div`
  width: 100%;
  min-width: 800px;
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
