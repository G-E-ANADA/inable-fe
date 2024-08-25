import { FunctionComponent, useState } from "react";
import styles from "../css/Education.module.css";
import Header from "../components/Header";
import EducationSNB from "../components/EducationSNB";
import jobInfoDummy_1 from "../asset/jobInfoDummy_1.svg";
import jobInfoDummy_2 from "../asset/jobInfoDummy_2.svg";

type MyPageSNBMenu = "INFO" | "JOB_INFO" | "COMMUNITY";

const EducationPage: FunctionComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState("JOB_INFO");

  const handleMenuSelect = (menu: MyPageSNBMenu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        <EducationSNB
          handleMenuSelect={handleMenuSelect}
          selectedMenu={selectedMenu}
        />
        {selectedMenu === "INFO" && <div>1</div>}
        {selectedMenu === "JOB_INFO" && (
          <div className={styles.tip}>
            <div className={styles.tipWrapper}>
              <div className={styles.tip1}>{`취업 정보 & TIP`}</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src={jobInfoDummy_1}
                />
                <div className={styles.ai}>
                  AI 도우미를 활용하여 취업 성공하기
                </div>
              </div>
              <div className={styles.frameGroup}>
                <img className={styles.frameItem} alt="" src={jobInfoDummy_2} />
                <div className={styles.ai}>8월 최신 취업 정보</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameInner} />
                <div className={styles.ai}>업로드 예정</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameInner} />
                <div className={styles.ai}>업로드 예정</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameInner} />
                <div className={styles.ai}>업로드 예정</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameInner} />
                <div className={styles.ai}>업로드 예정</div>
              </div>
            </div>
          </div>
        )}
        {selectedMenu === "COMMUNITY" && <div>2</div>}
      </div>
    </>
  );
};

export default EducationPage;
