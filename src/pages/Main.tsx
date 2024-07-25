import { Link } from "react-router-dom";
import useAuthStore from "../store/store";
import Header from "./Header";

const Main = () => {
  console.log(useAuthStore.getState().token);

  return <Header />;
};

export default Main;
