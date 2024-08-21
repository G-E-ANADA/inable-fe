import { FunctionComponent, useState } from "react";
import styles from "../css/MyPage.module.css";
import Header from "../components/Header";
import SNB from "../components/Snb";
import { Checkbox } from "@mui/material";

type MyPageSNBMenu = "SELF_MANAGEMENT" | "APPLY_ACTIVITY" | "COMMUNITY";

const MyPage: FunctionComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState("SELF_MANAGEMENT");

  const handleMenuSelect = (menu: MyPageSNBMenu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Header />
      <SNB handleMenuSelect={handleMenuSelect} selectedMenu={selectedMenu} />

      {selectedMenu === "SELF_MANAGEMENT" && (
        <div className={styles.card}>
          <div className={styles.textInputContainer}>
            <div className={styles.div}>나의 정보</div>
            <div className={styles.textInputContainer1}>
              <div className={styles.textInput} />
              <div className={styles.btn}>
                {/* <div className={styles.text}>이력서 작성하기</div> */}
                <a className={styles.btn} href="/resumeWriteForm">
                  이력서 작성하기
                </a>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.div}>나의 관심사</div>
            <div className={styles.horizontalContainer}>
              <div className={styles.component2Parent}>
                <div className={styles.component2}>
                  <div className={styles.text}>저장된 공고</div>
                </div>
                <div className={styles.component3}>
                  <div className={styles.text2}>관심 기업</div>
                </div>
                <div className={styles.component3}>
                  <div className={styles.text2}>관심 교육</div>
                </div>
              </div>
              <div className={styles.textInput1}>
                <div className={styles.button}>
                  <Checkbox color="primary" size="medium" />
                  <div className={styles.text2}>전체 선택</div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.horizontalContainer1}>
                    <div className={styles.button3}>삭제</div>
                  </div>
                </div>
              </div>
              <div className={styles.textInput2} />
            </div>
          </div>
        </div>
      )}

      {selectedMenu === "APPLY_ACTIVITY" && <div>APPLY_ACTIVITY</div>}

      {selectedMenu === "COMMUNITY" && <div>COMMUNITY</div>}
    </>
  );
};

export default MyPage;
