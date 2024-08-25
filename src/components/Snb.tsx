import { FunctionComponent } from "react";
import styles from "../css/SNB.module.css";

const SNB = ({ handleMenuSelect, selectedMenu }: any) => {
  return (
    <div className={styles.snb}>
      <div
        className={`${styles.snbBox} ${styles.selectBox} 
        ${selectedMenu === "SELF_MANAGEMENT" ? styles.activeSnb : ""}`}
        onClick={() => handleMenuSelect("SELF_MANAGEMENT")}
      >
        <div className={styles.text1}>자기 관리</div>
      </div>
      <div
        className={`${styles.snbBox} ${styles.selectBox}
        ${selectedMenu === "APPLY_ACTIVITY" ? styles.activeSnb : ""}`}
        onClick={() => handleMenuSelect("APPLY_ACTIVITY")}
      >
        <div className={styles.text1}>지원 활동</div>
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
export default SNB;
