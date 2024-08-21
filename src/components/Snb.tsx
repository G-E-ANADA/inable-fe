import { FunctionComponent } from "react";
import styles from "../css/SNB.module.css";

const SNB: FunctionComponent = () => {
  return (
    <div className={styles.snb}>
      <div className={styles.text}>
        <b className={styles.text1}>자기 관리</b>
      </div>
      <div className={styles.text2}>
        <div className={styles.text1}>지원 활동</div>
      </div>
      <div className={styles.text2}>
        <div className={styles.text1}>커뮤니티</div>
      </div>
    </div>
  );
};
export default SNB;
