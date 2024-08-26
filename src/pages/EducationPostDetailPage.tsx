import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Rectangle from "../asset/Rectangle.png";
import EduPostDetail from "../components/eduPostDetail/EduPostDetail";
import Header from "../components/Header";
import { EduPostListData } from "../types/PostDataType";

const EduPostDetailPage = () => {
  const location = useLocation();
  const { eduPost } = location.state as { eduPost: EduPostListData };

  if (!eduPost) {
    return <div>No edu post selected</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <ImageWrapper>
          <StyledImage src={Rectangle} alt="Rectangle" />
        </ImageWrapper>
        <EduPostDetail eduPost={eduPost} />
      </Container>
    </>
  );
};

export default EduPostDetailPage;

const Container = styled.div`
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 80px;
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
