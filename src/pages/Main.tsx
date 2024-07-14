import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main 화면</h1>
      <ul>
        <li>
          <Link to="/sample-login">sample login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
