import { Link } from "react-router-dom";

const Header = () => {
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
        <li>
          <Link to="/logout">logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
