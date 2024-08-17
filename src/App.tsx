import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Logout from "./pages/LogoutPage";
import Signup from "./pages/Signup";
import JobPostMapPage from "./pages/JobPostMapPage";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobPostMap" element={<JobPostMapPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
