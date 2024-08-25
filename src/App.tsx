import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./components/style/GlobalStyle";
import JobPostDetailPage from "./pages/JobPostDetailPage";
import JobPostMapPage from "./pages/JobPostMapPage";
import Logout from "./pages/LogoutPage";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import theme from "./theme";
import LoginSelectPage from "./pages/LoginSelectPage";
import EducationPage from "./pages/EducationPage";
import Login from "./pages/Login";
import JobPostListPage2 from "./pages/JobPostListPage2";

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
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
