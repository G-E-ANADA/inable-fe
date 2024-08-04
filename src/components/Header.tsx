import styles from "../css/Header.module.css";
import logo from "../asset/logo.svg";
import { Link } from "react-router-dom";
import useAuthStore from "../store/store";

const Header = ({}) => {
  const loginUser = useAuthStore.getState().user;

  return (
    <div className={styles.gnb}>
      <div className={styles.logoParent}>
        <img className={styles.logoIcon} alt="" src={logo} />
        <div className={styles.tabParent}>
          <div className={styles.tab}>
            <div className={styles.text}>AI 도우미</div>
          </div>
          <div className={styles.tab}>
            <div className={styles.text}>채용 정보</div>
          </div>
          <div className={styles.tab}>
            <div className={styles.text}>채용 지도</div>
          </div>
          <div className={styles.tab}>
            <div className={styles.text}>나의 정보</div>
          </div>
          <div className={styles.tab}>
            <div className={styles.text}>교육 정보</div>
          </div>
        </div>
        <div className={styles.tab}>
          {loginUser ? (
            <a className={styles.text} href="/logout">
              로그아웃
            </a>
          ) : (
            <a className={styles.text} href="/login">
              로그인
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
