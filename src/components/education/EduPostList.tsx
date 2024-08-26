import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchEduPostList } from "../../api/postsApi";
import { EduPostListData, eduPostListColumns } from "../../types/PostDataType";
import DynamicTable from "./DynamicTable";

const EduPostList = () => {
  const [eduPosts, setEduPosts] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
  const [sort, setSort] = useState<string>("date");

  const navigate = useNavigate(); // useNavigate 훅 호출

  // 교육 정보
  const { isLoading: eduPostsLoading, error: eduPostsError } = useQuery(
    ["eduPosts"],
    () => fetchEduPostList(),
    {
      onSuccess: (data) => {
        const processedData = data.edu_posts;
        setEduPosts(processedData);
        setTotalItemsCount(data.total_count);
        setShowLoading(false);
      },
      onError: () => setShowLoading(false),
    }
  );

  useEffect(() => {
    if (eduPostsLoading) {
      const timer = setTimeout(() => {
        setShowLoading(true);
      }, 200); // 200ms 후에 로딩 상태 표시

      return () => clearTimeout(timer);
    }
  }, [eduPostsLoading]);

  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleRowClick = (eduPost: EduPostListData) => {
    navigate(`/edu-post/${eduPost.id}`, { state: { eduPost } });
  };

  return (
    <StyledContainer>
      <StyledContents>
        <StyledTitle>실시간 교육 정보</StyledTitle>
        <StyledSubTitle>실시간 교육 정보를 확인해 보세요</StyledSubTitle>
        <StyledListHeader>
          <Text>검색결과</Text>
          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="sort-label">정렬</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={sort}
              label="정렬"
              onChange={(e) => setSort(e.target.value)}
            >
              <MenuItem value={"date"}>최신순</MenuItem>
            </Select>
          </FormControl>
        </StyledListHeader>
        <StyledDynamicTableContainer>
          <DynamicTable
            columns={eduPostListColumns}
            data={eduPosts}
            onRowClick={handleRowClick}
          />
        </StyledDynamicTableContainer>
        <StyledPaginationContainer>
          <Pagination
            size="small"
            color="primary"
            shape="rounded"
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            siblingCount={1} // Number of sibling pages to show
            boundaryCount={2} // Number of boundary pages to show
          />
        </StyledPaginationContainer>
      </StyledContents>
    </StyledContainer>
  );
};

export default EduPostList;

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledDynamicTableContainer = styled.div``;

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

const StyledListHeader = styled.div`
  display: flex;
  align-items: center; /* 세로 정렬을 가운데로 */
  justify-content: space-between; /* 왼쪽과 오른쪽 끝으로 배치 */
  text-align: left;
  font-size: 21px;
  color: #191919;
  margin-bottom: 24px;
  margin-top: 35px;
`;

const Text = styled.div`
  flex-grow: 1; /* 나머지 공간을 차지 */
  text-align: left; /* 왼쪽 정렬 */
`;

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
