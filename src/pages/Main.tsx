import Header from "../components/Header";
import Home from "../components/Home";

const Main = () => {
  const navLinks = [
    { to: "/", text: "AI 도우미" },
    { to: "/jobPostInfo", text: "채용 정보" },
    { to: "/jobPostMap", text: "채용 지도" },
    { to: "/myPage", text: "나의 정보" },
    { to: "/educationInfo", text: "교육 정보" },
  ];

  return (
    <>
      <Header navLinks={navLinks}></Header>
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
