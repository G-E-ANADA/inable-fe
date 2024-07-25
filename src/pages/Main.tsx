import { Link } from "react-router-dom";
import useAuthStore from "../store/store";

const Main = () => {
  console.log(useAuthStore.getState().token);

  return (
    <div>
      <h1>Main 화면</h1>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
