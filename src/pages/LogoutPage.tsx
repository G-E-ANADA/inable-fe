import useAuthStore from "../store/store";

const Logout = () => {
  useAuthStore.getState().clearToken();
  alert("로그아웃 되었습니다.");

  window.location.href = "/";

  return <div></div>;
};

export default Logout;
