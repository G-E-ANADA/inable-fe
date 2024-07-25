import { Link } from "react-router-dom";
import useAuthStore from "../store/store";

const Header = () => {
  console.log(useAuthStore.getState().token);

  return (
    <div>
      <h1>Inable</h1>
      <ul>
        <li>
          <Link to="/">main</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
