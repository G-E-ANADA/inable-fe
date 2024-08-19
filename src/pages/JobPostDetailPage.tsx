import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Rectangle from "../asset/Rectangle.png";
import Header from "../components/Header";
import JobPostDetail from "../components/jobPostDetail/JobPostDetail";
import { JobPostListData } from "../types/JobPostDataType";

const JobPostDetailPage = () => {
  const location = useLocation();
  const { jobPost } = location.state as { jobPost: JobPostListData };

  if (!jobPost) {
    return <div>No job post selected</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <ImageWrapper>
          <StyledImage src={Rectangle} alt="Rectangle" />
        </ImageWrapper>
        <JobPostDetail jobPost={jobPost} />
      </Container>
    </>
  );
};

export default JobPostDetailPage;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
