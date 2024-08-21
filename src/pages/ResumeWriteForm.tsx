import { FunctionComponent } from "react";
import styles from "../css/Resumewriteform.module.css";
import Header from "../components/Header";
import SNB from "../components/Snb";
import { Checkbox } from "@mui/material";

const ResumeWriteForm = () => {
  return (
    <>
      <Header />
      <SNB />

      <div className={styles.div}>
        <div className={styles.inputFormContainer}>
          <div className={styles.textInput}>
            <div className={styles.text}>이력서 작성</div>
          </div>
          <div className={styles.inputForm}>
            <div className={styles.textInputContainer}>
              <div className={styles.div2}>제목</div>
              <div className={styles.textInput1} />
            </div>
            <div className={styles.textInputContainer}>
              <div className={styles.div2}>자기소개</div>
              <div className={styles.textInput2} />
            </div>
            <div className={styles.textInputContainer}>
              <div className={styles.div2}>경력</div>
              <div className={styles.textInput2} />
            </div>
            <div className={styles.textInputContainer}>
              <div className={styles.paragraphContainer}>
                <div className={styles.text}>장애 정보</div>
                <div className={styles.div6}>
                  *복지카드, 장애인 증명서 파일을 업로드 해주세요.
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.horizontalContainer1}>
                  <div className={styles.horizontalContainer2}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="Vector.svg"
                    />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="Vector.svg"
                    />
                  </div>
                  <div className={styles.kg}>파일 올리기</div>
                </div>
              </div>
            </div>
            <div className={styles.textInputContainer}>
              <div className={styles.div2}>학력</div>
              <div className={styles.textInput1} />
            </div>
            <div className={styles.textInputContainer}>
              <div className={styles.div2}>스킬</div>
              <div className={styles.textInput1} />
              <div className={styles.verticalContainer}>
                <div className={styles.textInput6}>
                  <div className={styles.text}>장애 정보</div>
                </div>
                <div className={styles.verticalContainer1}>
                  <div className={styles.textInputContainer}>
                    <div className={styles.div2}>
                      <span>*</span>
                      <span className={styles.span}>시력</span>
                    </div>
                    <div className={styles.horizontalContainer4}>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>무관</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>일상적 활동 가능</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>일상적 활동 어려움</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.textInputContainer}>
                    <div className={styles.div2}>
                      <span>*</span>
                      <span className={styles.span}>드는힘</span>
                    </div>
                    <div className={styles.horizontalContainer4}>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>무관</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>5kg 이내 가능</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>10kg 이내 가능</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.textInputContainer}>
                    <div className={styles.div2}>
                      <span>*</span>
                      <span className={styles.span}>양손</span>
                    </div>
                    <div className={styles.horizontalContainer4}>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>무관</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>양손작업 가능</div>
                      </div>
                      <div className={styles.container}>
                        <div className={styles.checkbox}>
                          <div className={styles.button1}>
                            <Checkbox color="primary" size="medium" />
                          </div>
                        </div>
                        <div className={styles.kg}>한손작업 가능</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textInputContainer}>
              <div className={styles.div2}>수상 및 기타</div>
              <div className={styles.textInput1} />
            </div>
            <div className={styles.textInputContainer}>
              <div className={styles.div2}>외국어</div>
              <div className={styles.textInput1} />
            </div>
          </div>
        </div>
        <div className={styles.segmentedPicker}>
          <div className={styles.btn}>
            <div className={styles.text}>취소</div>
          </div>
          <div className={styles.btn1}>
            <div className={styles.text}>저장</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumeWriteForm;
