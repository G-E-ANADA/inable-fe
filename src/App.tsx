import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SampleLoginPage from "./pages/SampleLoginPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sample-login" element={<SampleLoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
