import styles from "../css/Header.module.css";
import logo from "../asset/logo.svg";

const Header = ({}) => {
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
          <div className={styles.text}>로그인</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
