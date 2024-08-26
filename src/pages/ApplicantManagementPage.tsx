import { FunctionComponent } from "react";
import styles from "../css/ApplicantManagementPage.module.css";
import Header from "../components/Header";
import { Checkbox } from "@mui/material";
import { Select } from "@mui/material";

const ApplicantManagementPage: FunctionComponent = () => {
  return (
    <>
      <Header />

      <div className={styles.div}>
        <div className={styles.horizontalContainer}>
          <div className={styles.div1}>지원자 관리</div>
          <div className={styles.select}>
            <div className={styles.textInput}>
              <div className={styles.container}>
                <div className={styles.textInput1} />
                <div className={styles.label}>전체</div>
                <div className={styles.textInput2} />
                <Select variant="outlined" size="small" />
              </div>
            </div>
          </div>
          <div className={styles.horizontalContainer1}>
            <div className={styles.component2}>
              <div className={styles.text}>전체 (1)</div>
            </div>
            <div className={styles.component3}>
              <div className={styles.text1}>서류전형 (1)</div>
            </div>
            <div className={styles.component3}>
              <div className={styles.text1}>1차 면접</div>
            </div>
            <div className={styles.component3}>
              <div className={styles.text1}>2차 면접</div>
            </div>
            <div className={styles.component3}>
              <div className={styles.text1}>최종 합격</div>
            </div>
            <div className={styles.component4} />
          </div>
          <div className={styles.horizontalContainer2}>
            <div className={styles.horizontalContainer3}>
              <div className={styles.horizontalContainer4}>
                <div className={styles.buttonContainer}>
                  <div className={styles.checkbox}>
                    <div className={styles.button}>
                      <Checkbox color="primary" size="medium" />
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.text1}>서류전형</div>
                  </div>
                </div>
                <div className={styles.textInputContainer}>
                  <div className={styles.div1}>
                    <a className={styles.text} href="/applicantResumePage">
                      안녕하세요. 최고가 되고 싶은 팜하니입니다.
                    </a>
                  </div>

                  <div className={styles.textInput3}>
                    <div className={styles.div4}>[계약직] 사무보조원 모집</div>
                    <div className={styles.paragraphContainer}>
                      <div className={styles.text1}>지원일</div>
                      <div className={styles.text1}>2024-08-15</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.segmentedPicker}>
                <div className={styles.button1}>
                  <div className={styles.btn}>
                    <div className={styles.text}>다음 전형 이동</div>
                  </div>
                </div>
                <div className={styles.button3}>
                  <div className={styles.btn1}>
                    <div className={styles.text}>합격 발표</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantManagementPage;
