import Header from "../components/Header";
import styles from "../css/LoginSelectPage.module.css";
import blueNextIcon from "../asset/blueNextIcon.svg";
import whiteNextIcon from "../asset/whiteNextIcon.svg";
import corpMemberLogin from "../asset/corpMemberLogin.svg";
import personalMemberLogin from "../asset/personalMemberLogin.svg";

const LoginSelectPage = () => {
  enum SelectBoxType {
    Personal = "personal",
    Corp = "corp",
  }

  const handleSelectBox = (type: SelectBoxType) => {
    if (type === SelectBoxType.Personal) {
      return () => {
        window.location.href = "/memberLogin";
      };
    } else if (type === SelectBoxType.Corp) {
      return () => {
        alert("기업 회원 로그인은 준비 중입니다.");
      };
    }
  };
  return (
    <>
      <Header></Header>
      <div className={styles.div}>
        <div className={styles.div1}>로그인</div>
        <div className={styles.selectContainer}>
          <div
            className={`${styles.diversity15Parent} ${styles.selectBox}`}
            onClick={handleSelectBox(SelectBoxType.Personal)}
          >
            <div className={styles.parent}>
              <label className={styles.a}>개인 회원 로그인</label>
              <img className={styles.frameChild} alt="" src={blueNextIcon} />
            </div>
            <img
              className={styles.diversity15Icon}
              alt=""
              src={personalMemberLogin}
            />
          </div>
          <div
            className={`${styles.receptionist12Parent} ${styles.selectBox}`}
            onClick={handleSelectBox(SelectBoxType.Corp)}
          >
            <div className={styles.parent}>
              <label className={styles.b}>기업 회원 로그인</label>
              <img className={styles.frameChild} alt="" src={whiteNextIcon} />
            </div>
            <img
              className={styles.diversity15Icon}
              alt=""
              src={corpMemberLogin}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSelectPage;
