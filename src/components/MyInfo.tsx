import { FunctionComponent } from "react";
import styles from "../css/MyPage.module.css";
import { Checkbox } from "@mui/material";

const MyInfo = () => {
  return (
    /*
    <div className={styles.card}>
      <div className={styles.textInputContainer}>
        <div className={styles.div}>나의 정보</div>
        <div className={styles.textInputContainer1}>
          <div className={styles.textInput} />
          <div className={styles.btn}>
            {/* <div className={styles.text}>이력서 작성하기</div> */ /*}
        
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

*/

    <div className={styles.textInputContainer}>
      <div className={styles.div}>
        <div className={styles.contents}>
          <div className={styles.verticalContainer}>
            <div className={styles.div1}>나의 정보</div>
            <div className={styles.horizontalContainer3}>
              <div className={styles.textInput}>
                <div className={styles.button}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <Checkbox color="primary" size="medium" />
                    </div>
                  </div>
                  <div className={styles.text3}>전체 선택</div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.horizontalContainer4}>
                    <div className={styles.button3}>삭제</div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer5}>
                <div className={styles.horizontalContainer6}>
                  <div className={styles.container}>
                    <div className={styles.checkbox}>
                      <div className={styles.button1}>
                        <Checkbox color="primary" size="medium" />
                      </div>
                    </div>
                    <div className={styles.button5}>
                      <div className={styles.text3}>이력서 1</div>
                    </div>
                  </div>
                  <div className={styles.button5}>
                    <div className={styles.text3}>2024.07.28</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.verticalContainer}>
            <div className={styles.div1}>나의 관심사</div>
            <div className={styles.horizontalContainer3}>
              <div className={styles.component3Parent}>
                <div className={styles.component3}>
                  <div className={styles.text}>관심 기업</div>
                </div>
                <div className={styles.component2}>
                  <div className={styles.text3}>저장된 공고</div>
                </div>
                <div className={styles.component2}>
                  <div className={styles.text3}>관심 교육</div>
                </div>
              </div>
              <div className={styles.textInput}>
                <div className={styles.button}>
                  <div className={styles.checkbox}>
                    <div className={styles.button1}>
                      <Checkbox color="primary" size="medium" />
                    </div>
                  </div>
                  <div className={styles.text3}>전체 선택</div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.horizontalContainer4}>
                    <div className={styles.button3}>삭제</div>
                  </div>
                </div>
              </div>
              <div className={styles.verticalContainer2}>
                <div className={styles.container2}>
                  <div className={styles.container3}>
                    <div className={styles.container}>
                      <div className={styles.checkbox}>
                        <div className={styles.button1}>
                          <Checkbox color="primary" size="medium" />
                        </div>
                      </div>
                      <div className={styles.button11}>
                        <div className={styles.text3}>한국환경보전원</div>
                        <img
                          className={styles.icLikeIcon}
                          alt=""
                          src="ic_like.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container2}>
                  <div className={styles.container3}>
                    <div className={styles.container}>
                      <div className={styles.checkbox}>
                        <div className={styles.button1}>
                          <Checkbox color="primary" size="medium" />
                        </div>
                      </div>
                      <div className={styles.button11}>
                        <div className={styles.text3}>한국환경보전원</div>
                        <img
                          className={styles.icLikeIcon}
                          alt=""
                          src="ic_like.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container2}>
                  <div className={styles.container3}>
                    <div className={styles.container}>
                      <div className={styles.checkbox}>
                        <div className={styles.button1}>
                          <Checkbox color="primary" size="medium" />
                        </div>
                      </div>
                      <div className={styles.button11}>
                        <div className={styles.text3}>한국환경보전원</div>
                        <img
                          className={styles.icLikeIcon}
                          alt=""
                          src="ic_like.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container2}>
                  <div className={styles.container3}>
                    <div className={styles.container}>
                      <div className={styles.checkbox}>
                        <div className={styles.button1}>
                          <Checkbox color="primary" size="medium" />
                        </div>
                      </div>
                      <div className={styles.button11}>
                        <div className={styles.text3}>한국환경보전원</div>
                        <img
                          className={styles.icLikeIcon}
                          alt=""
                          src="ic_like.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container2}>
                  <div className={styles.container3}>
                    <div className={styles.container}>
                      <div className={styles.checkbox}>
                        <div className={styles.button1}>
                          <Checkbox color="primary" size="medium" />
                        </div>
                      </div>
                      <div className={styles.button11}>
                        <div className={styles.text3}>한국환경보전원</div>
                        <img
                          className={styles.icLikeIcon}
                          alt=""
                          src="ic_like.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container2}>
                  <div className={styles.container3}>
                    <div className={styles.container}>
                      <div className={styles.checkbox}>
                        <div className={styles.button1}>
                          <Checkbox color="primary" size="medium" />
                        </div>
                      </div>
                      <div className={styles.button11}>
                        <div className={styles.text3}>한국환경보전원</div>
                        <img
                          className={styles.icLikeIcon}
                          alt=""
                          src="ic_like.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer5}>
                <div className={styles.container3}>
                  <div className={styles.container}>
                    <div className={styles.checkbox}>
                      <div className={styles.button1}>
                        <Checkbox color="primary" size="medium" />
                      </div>
                    </div>
                    <div className={styles.button11}>
                      <div className={styles.text3}>한국환경보전원</div>
                      <img
                        className={styles.icLikeIcon}
                        alt=""
                        src="ic_like.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
