import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./components/style/GlobalStyle";
import JobPostDetailPage from "./pages/JobPostDetailPage";
import JobPostListPage2 from "./pages/JobPostListPage2";
import JobPostMapPage from "./pages/JobPostMapPage";
import Logout from "./pages/LogoutPage";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import theme from "./theme";
import LoginSelectPage from "./pages/LoginSelectPage";
import EducationPage from "./pages/EducationPage";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ResumeWriteForm from "./pages/ResumeWriteForm";
import ApplicantManagementPage from "./pages/ApplicantManagementPage";
import ApplicantResumePage from "./pages/ApplicantResumePage";

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
              <Route path="/jobPostList" element={<JobPostListPage2 />} />
              <Route path="/jobPostMap" element={<JobPostMapPage />} />
              <Route path="/job-post/:id" element={<JobPostDetailPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/myPage" element={<MyPage />} />
              <Route path="/resumeWriteForm" element={<ResumeWriteForm />} />
              <Route
                path="/applicantResumePage"
                element={<ApplicantResumePage />}
              />
              <Route
                path="/applicantManagementPage"
                element={<ApplicantManagementPage />}
              />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
