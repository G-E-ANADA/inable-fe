import { FunctionComponent } from "react";
import styles from "../css/Supportactivities.module.css";
import Header from "../components/Header";
import SNB from "../components/Snb";
import { Checkbox } from "@mui/material";

const SupportActivities: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.gnb}>
        <div className={styles.horizontalContainer}>
          <img className={styles.logoIcon} alt="" src="logo.svg" />
          <div className={styles.horizontalContainer1}>
            <div className={styles.tab}>
              <div className={styles.text}>AI 도우미</div>
            </div>
            <div className={styles.tab1}>
              <b className={styles.text1}>채용 정보</b>
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
      <div className={styles.snb}>
        <div className={styles.text6}>
          <div className={styles.text7}>나의 정보</div>
        </div>
        <div className={styles.text8}>
          <b className={styles.text7}>지원 활동</b>
        </div>
        <div className={styles.text6}>
          <div className={styles.text7}>커뮤니티</div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.div1}>지원 활동</div>
        <div className={styles.tableContainer1}>
          <div className={styles.horizontalContainer2}>
            <div className={styles.buttonContainer}>
              <div className={styles.button}>
                <div className={styles.checkbox}>
                  <div className={styles.button1}>
                    <img
                      className={styles.hiddenIcon}
                      alt=""
                      src="_hidden.svg"
                    />
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
              <div className={styles.button4}>
                <div className={styles.horizontalContainer4}>
                  <div className={styles.textInput} />
                  <div className={styles.label}>지난 1개월</div>
                  <div className={styles.textInput1} />
                  <img
                    className={styles.arrowdropdownfilledIcon}
                    alt=""
                    src="ArrowDropDownFilled.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.table}>
            <div className={styles.horizontalContainer5}>
              <div className={styles.horizontalContainer6}>
                <div className={styles.buttonContainer}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <img
                        className={styles.hiddenIcon}
                        alt=""
                        src="_hidden.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button6}>
                    <div className={styles.text1}>한국환경보전원</div>
                  </div>
                  <div className={styles.textInput2}>
                    <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                    <div className={styles.paragraphContainer}>
                      <div className={styles.text1}>서울 성동구</div>
                      <div className={styles.text1}>계약직</div>
                      <div className={styles.text1}>2024-07-01~2024-07-10</div>
                    </div>
                  </div>
                </div>
                <div className={styles.segmentedPicker}>
                  <div className={styles.text}>지원 완료</div>
                  <div className={styles.select}>
                    <div className={styles.button4}>
                      <div className={styles.horizontalContainer4}>
                        <div className={styles.textInput} />
                        <div className={styles.label}>지원 완료</div>
                        <div className={styles.textInput1} />
                        <img
                          className={styles.arrowdropdownfilledIcon}
                          alt=""
                          src="ArrowDropDownFilled.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textInput5}>
                <div className={styles.textfield}>
                  <div className={styles.textInputContainer}>
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
            <div className={styles.horizontalContainer5}>
              <div className={styles.horizontalContainer6}>
                <div className={styles.buttonContainer}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <img
                        className={styles.hiddenIcon}
                        alt=""
                        src="_hidden.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button6}>
                    <div className={styles.text1}>한국환경보전원</div>
                  </div>
                  <div className={styles.textInput2}>
                    <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                    <div className={styles.paragraphContainer}>
                      <div className={styles.text1}>서울 성동구</div>
                      <div className={styles.text1}>계약직</div>
                      <div className={styles.text1}>2024-07-01~2024-07-10</div>
                    </div>
                  </div>
                </div>
                <div className={styles.segmentedPicker}>
                  <div className={styles.text}>지원 완료</div>
                  <div className={styles.select}>
                    <div className={styles.button4}>
                      <div className={styles.horizontalContainer4}>
                        <div className={styles.textInput} />
                        <div className={styles.label}>지원 완료</div>
                        <div className={styles.textInput1} />
                        <img
                          className={styles.arrowdropdownfilledIcon}
                          alt=""
                          src="ArrowDropDownFilled.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textInput5}>
                <div className={styles.textfield}>
                  <div className={styles.textInputContainer}>
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
            <div className={styles.horizontalContainer5}>
              <div className={styles.horizontalContainer6}>
                <div className={styles.buttonContainer}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <img
                        className={styles.hiddenIcon}
                        alt=""
                        src="_hidden.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button6}>
                    <div className={styles.text1}>한국환경보전원</div>
                  </div>
                  <div className={styles.textInput2}>
                    <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                    <div className={styles.paragraphContainer}>
                      <div className={styles.text1}>서울 성동구</div>
                      <div className={styles.text1}>계약직</div>
                      <div className={styles.text1}>2024-07-01~2024-07-10</div>
                    </div>
                  </div>
                </div>
                <div className={styles.segmentedPicker}>
                  <div className={styles.text}>지원 완료</div>
                  <div className={styles.select}>
                    <div className={styles.button4}>
                      <div className={styles.horizontalContainer4}>
                        <div className={styles.textInput} />
                        <div className={styles.label}>지원 완료</div>
                        <div className={styles.textInput1} />
                        <img
                          className={styles.arrowdropdownfilledIcon}
                          alt=""
                          src="ArrowDropDownFilled.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textInput5}>
                <div className={styles.textfield}>
                  <div className={styles.textInputContainer}>
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
            <div className={styles.horizontalContainer5}>
              <div className={styles.horizontalContainer6}>
                <div className={styles.buttonContainer}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <img
                        className={styles.hiddenIcon}
                        alt=""
                        src="_hidden.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button6}>
                    <div className={styles.text1}>한국환경보전원</div>
                  </div>
                  <div className={styles.textInput2}>
                    <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                    <div className={styles.paragraphContainer}>
                      <div className={styles.text1}>서울 성동구</div>
                      <div className={styles.text1}>계약직</div>
                      <div className={styles.text1}>2024-07-01~2024-07-10</div>
                    </div>
                  </div>
                </div>
                <div className={styles.segmentedPicker}>
                  <div className={styles.text}>지원 완료</div>
                  <div className={styles.select}>
                    <div className={styles.button4}>
                      <div className={styles.horizontalContainer4}>
                        <div className={styles.textInput} />
                        <div className={styles.label}>지원 완료</div>
                        <div className={styles.textInput1} />
                        <img
                          className={styles.arrowdropdownfilledIcon}
                          alt=""
                          src="ArrowDropDownFilled.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textInput5}>
                <div className={styles.textfield}>
                  <div className={styles.textInputContainer}>
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
            <div className={styles.horizontalContainer5}>
              <div className={styles.horizontalContainer6}>
                <div className={styles.buttonContainer}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <img
                        className={styles.hiddenIcon}
                        alt=""
                        src="_hidden.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button6}>
                    <div className={styles.text1}>한국환경보전원</div>
                  </div>
                  <div className={styles.textInput2}>
                    <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                    <div className={styles.paragraphContainer}>
                      <div className={styles.text1}>서울 성동구</div>
                      <div className={styles.text1}>계약직</div>
                      <div className={styles.text1}>2024-07-01~2024-07-10</div>
                    </div>
                  </div>
                </div>
                <div className={styles.segmentedPicker}>
                  <div className={styles.text}>지원 완료</div>
                  <div className={styles.select}>
                    <div className={styles.button4}>
                      <div className={styles.horizontalContainer4}>
                        <div className={styles.textInput} />
                        <div className={styles.label}>지원 완료</div>
                        <div className={styles.textInput1} />
                        <img
                          className={styles.arrowdropdownfilledIcon}
                          alt=""
                          src="ArrowDropDownFilled.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textInput5}>
                <div className={styles.textfield}>
                  <div className={styles.textInputContainer}>
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
            <div className={styles.horizontalContainer5}>
              <div className={styles.horizontalContainer6}>
                <div className={styles.buttonContainer}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <img
                        className={styles.hiddenIcon}
                        alt=""
                        src="_hidden.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button6}>
                    <div className={styles.text1}>한국환경보전원</div>
                  </div>
                  <div className={styles.textInput2}>
                    <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                    <div className={styles.paragraphContainer}>
                      <div className={styles.text1}>서울 성동구</div>
                      <div className={styles.text1}>계약직</div>
                      <div className={styles.text1}>2024-07-01~2024-07-10</div>
                    </div>
                  </div>
                </div>
                <div className={styles.segmentedPicker}>
                  <div className={styles.text}>지원 완료</div>
                  <div className={styles.select}>
                    <div className={styles.button4}>
                      <div className={styles.horizontalContainer4}>
                        <div className={styles.textInput} />
                        <div className={styles.label}>지원 완료</div>
                        <div className={styles.textInput1} />
                        <img
                          className={styles.arrowdropdownfilledIcon}
                          alt=""
                          src="ArrowDropDownFilled.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textInput5}>
                <div className={styles.textfield}>
                  <div className={styles.textInputContainer}>
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
export default SupportActivities;
