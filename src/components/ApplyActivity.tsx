import styles from "../css/ApplyActivity.module.css";
import { Checkbox } from "@mui/material";

const ApplyActivity = () => {
  function handleChange(event: SelectChangeEvent<any>, child: ReactNode): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.div}>
      <div className={styles.tableContainer}>
        <div className={styles.div1}>지원 활동</div>
        <div className={styles.tableContainer1}>
          <div className={styles.horizontalContainer2}>
            <div className={styles.buttonContainer}>
              <div className={styles.button}>
                <div className={styles.checkbox}>
                  <div className={styles.button1}>
                    <Checkbox color="primary" size="medium" />
                  </div>
                </div>
                <div className={styles.text1}>전체 선택</div>
              </div>
              <div className={styles.button2}>
                <div className={styles.horizontalContainer3}>
                  <div className={styles.button3}>삭제</div>
                </div>
              </div>
            </div>
            <div className={styles.select}>
              <div className={styles.input}>
                <div className={styles.container}>
                  <div className={styles.minHeight} />
                  <div className={styles.label}>지난 1개월</div>
                  <div className={styles.minWidth} />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 9.5L12 14.5L17 9.5H7Z"
                      fill="black"
                      fill-opacity="0.56"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.horizontalContainer4}>
              <div className={styles.horizontalContainer5}>
                <div className={styles.buttonContainer}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <Checkbox color="primary" size="medium" />
                    </div>
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.text1}>한국환경보전원</div>
                  </div>
                  <div className={styles.textInput}>
                    <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                    <div className={styles.paragraphContainer}>
                      <div className={styles.text1}>서울 성동구</div>
                      <div className={styles.text1}>계약직</div>
                      <div className={styles.text1}>2024-07-01~2024-07-10</div>
                    </div>
                  </div>
                </div>
                <div className={styles.segmentedPicker}>
                  <div className={styles.text}>불합격</div>
                  <div className={styles.select}>
                    <div className={styles.input}>
                      <div className={styles.container}>
                        <div className={styles.minHeight} />
                        <div className={styles.label}>불합격</div>
                        <div className={styles.minWidth} />
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 9.5L12 14.5L17 9.5H7Z"
                            fill="black"
                            fill-opacity="0.56"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textfieldParent}>
                <div className={styles.textfield}>
                  <div className={styles.input}>
                    <div className={styles.textInputContainer1}>
                      <div className={styles.label2}>메모를 작성해 보세요</div>
                    </div>
                  </div>
                </div>
                <div className={styles.btn}>
                  <div className={styles.text}>메모 작성</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplyActivity;
