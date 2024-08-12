import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Logout from "./pages/LogoutPage";
import JobPostMapPage from "./pages/JobPostMapPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/jobPostMap" element={<JobPostMapPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
