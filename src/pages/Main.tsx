// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      {/* <div>
        <h1>Main 화면</h1>
        <ul>
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/logout">logout</Link>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default Main;
