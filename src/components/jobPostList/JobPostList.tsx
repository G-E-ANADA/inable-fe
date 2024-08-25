import { Pagination } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  JobPostListColumn,
  JobPostListData,
} from "../../types/JobPostDataType";
import DynamicTable from "./DynamicTable";

interface JobPostListProps {
  columns: JobPostListColumn[];
  data: any[];
  currentPage: number;
  totalItemsCount: number;
  itemsPerPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
  onRowClick: (jobPost: JobPostListData) => void;
}

const JobPostList = ({
  columns,
  data,
  currentPage,
  totalItemsCount,
  itemsPerPage,
  onPageChange,
  onRowClick,
}: JobPostListProps) => {
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  return (
    <StyledContainer>
      <StyledDynamicTableContainer>
        <DynamicTable columns={columns} data={data} onRowClick={onRowClick} />
      </StyledDynamicTableContainer>
      <StyledPaginationContainer>
        <Pagination
          size="small"
          color="primary"
          shape="rounded"
          count={totalPages}
          page={currentPage}
          onChange={onPageChange}
          siblingCount={1} // Number of sibling pages to show
          boundaryCount={2} // Number of boundary pages to show
        />
      </StyledPaginationContainer>
    </StyledContainer>
  );
};

export default JobPostList;

const StyledContainer = styled.div``;

const StyledDynamicTableContainer = styled.div``;

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
