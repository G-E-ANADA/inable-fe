import styles from "../css/EducationSNB.module.css";

const EducationSNB = ({ handleMenuSelect, selectedMenu }: any) => {
  return (
    <div className={styles.snb}>
      <div
        className={`${styles.snbBox} ${styles.selectBox}
        ${selectedMenu === "INFO" ? styles.activeSnb : ""}`}
        onClick={() => handleMenuSelect("INFO")}
      >
        <div className={styles.text1}>정보</div>
      </div>
      <div
        className={`${styles.snbBox} ${styles.selectBox}
        ${selectedMenu === "JOB_INFO" ? styles.activeSnb : ""}`}
        onClick={() => handleMenuSelect("JOB_INFO")}
      >
        <div className={styles.text1}>취업 정보 & TIP</div>
      </div>
      <div
        className={`${styles.snbBox} ${styles.selectBox}
        ${selectedMenu === "COMMUNITY" ? styles.activeSnb : ""}`}
        onClick={() => handleMenuSelect("COMMUNITY")}
      >
        <div className={styles.text1}>커뮤니티</div>
      </div>
    </div>
  );
};
export default EducationSNB;
