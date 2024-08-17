import Header from "../components/Header";
import GlobalStyle from "../components/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const JobPostMapPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <div style={{ padding: 60 }}>
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            color: "black",
            fontSize: 24,
            fontWeight: "500",
            lineHeight: 3,
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
      <div>검색결과</div>
      <div></div>
    </ThemeProvider>
  );
};

export default JobPostMapPage;
