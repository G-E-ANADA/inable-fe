import { Link } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div>
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
      </div>
    </>
  );
};

export default Main;
