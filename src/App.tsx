import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./components/style/GlobalStyle";
import EducationPage from "./pages/EducationPage";
import EduPostDetailPage from "./pages/EducationPostDetailPage";
import JobPostDetailPage from "./pages/JobPostDetailPage";
import JobPostListPage from "./pages/JobPostListPage";
import JobPostMapPage from "./pages/JobPostMapPage";
import Login from "./pages/Login";
import LoginSelectPage from "./pages/LoginSelectPage";
import Logout from "./pages/LogoutPage";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import ResumeWriteForm from "./pages/ResumeWriteForm";
import Signup from "./pages/Signup";
import theme from "./theme";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/loginSelect" element={<LoginSelectPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/jobPostList" element={<JobPostListPage />} />
              <Route path="/jobPostMap" element={<JobPostMapPage />} />
              <Route path="/job-post/:id" element={<JobPostDetailPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/edu-post/:id" element={<EduPostDetailPage />} />
              <Route path="/myPage" element={<MyPage />} />
              <Route path="/resumeWriteForm" element={<ResumeWriteForm />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
