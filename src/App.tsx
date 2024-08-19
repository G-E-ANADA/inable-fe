import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import JobPostListPage from "./pages/JobPostListPage";
import JobPostMapPage from "./pages/JobPostMapPage";
import Login from "./pages/Login";
import Logout from "./pages/LogoutPage";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import theme from "./theme";
import GlobalStyle from "./components/style/GlobalStyle";

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
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/jobPostList" element={<JobPostListPage />} />
              <Route path="/jobPostMap" element={<JobPostMapPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
