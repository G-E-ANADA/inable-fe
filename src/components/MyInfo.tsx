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

                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6129 8.51102C10.738 6.5567 9.18852 5.9 7.78 5.9C5.64304 5.9 3.9 7.84728 3.9 10.356C3.9 11.7161 4.44708 12.8839 5.16092 13.8728C5.81091 14.7732 6.60399 15.5317 7.25562 16.1548C7.31873 16.2152 7.38052 16.2743 7.44073 16.3321L7.4409 16.3323C9.07302 17.8927 10.8293 20.0437 11.4911 21.1156C11.5124 21.1547 11.5541 21.193 11.614 21.193C11.6739 21.193 11.7156 21.1547 11.7369 21.1156C12.3987 20.0437 14.155 17.8927 15.7871 16.3323L15.7873 16.3321C15.8542 16.2678 15.9232 16.2019 15.9937 16.1345C16.6411 15.5161 17.4241 14.7682 18.067 13.8796C18.781 12.8928 19.328 11.7251 19.328 10.356C19.328 7.84728 17.585 5.9 15.448 5.9C14.041 5.9 12.4559 6.55556 11.6129 8.51102Z"
                            fill="#224A99"
                            stroke="#224A99"
                            stroke-width="0.2"
                          />
                        </svg>
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
                        <div className={styles.text3}>(주)에이스중공업</div>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6129 8.51102C10.738 6.5567 9.18852 5.9 7.78 5.9C5.64304 5.9 3.9 7.84728 3.9 10.356C3.9 11.7161 4.44708 12.8839 5.16092 13.8728C5.81091 14.7732 6.60399 15.5317 7.25562 16.1548C7.31873 16.2152 7.38052 16.2743 7.44073 16.3321L7.4409 16.3323C9.07302 17.8927 10.8293 20.0437 11.4911 21.1156C11.5124 21.1547 11.5541 21.193 11.614 21.193C11.6739 21.193 11.7156 21.1547 11.7369 21.1156C12.3987 20.0437 14.155 17.8927 15.7871 16.3323L15.7873 16.3321C15.8542 16.2678 15.9232 16.2019 15.9937 16.1345C16.6411 15.5161 17.4241 14.7682 18.067 13.8796C18.781 12.8928 19.328 11.7251 19.328 10.356C19.328 7.84728 17.585 5.9 15.448 5.9C14.041 5.9 12.4559 6.55556 11.6129 8.51102Z"
                            fill="#224A99"
                            stroke="#224A99"
                            stroke-width="0.2"
                          />
                        </svg>
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
                        <div className={styles.text3}>
                          제이비우리캐피탈 (주)
                        </div>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6129 8.51102C10.738 6.5567 9.18852 5.9 7.78 5.9C5.64304 5.9 3.9 7.84728 3.9 10.356C3.9 11.7161 4.44708 12.8839 5.16092 13.8728C5.81091 14.7732 6.60399 15.5317 7.25562 16.1548C7.31873 16.2152 7.38052 16.2743 7.44073 16.3321L7.4409 16.3323C9.07302 17.8927 10.8293 20.0437 11.4911 21.1156C11.5124 21.1547 11.5541 21.193 11.614 21.193C11.6739 21.193 11.7156 21.1547 11.7369 21.1156C12.3987 20.0437 14.155 17.8927 15.7871 16.3323L15.7873 16.3321C15.8542 16.2678 15.9232 16.2019 15.9937 16.1345C16.6411 15.5161 17.4241 14.7682 18.067 13.8796C18.781 12.8928 19.328 11.7251 19.328 10.356C19.328 7.84728 17.585 5.9 15.448 5.9C14.041 5.9 12.4559 6.55556 11.6129 8.51102Z"
                            fill="#224A99"
                            stroke="#224A99"
                            stroke-width="0.2"
                          />
                        </svg>
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
                        <div className={styles.text3}>(사)캠틱종합기술원</div>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6129 8.51102C10.738 6.5567 9.18852 5.9 7.78 5.9C5.64304 5.9 3.9 7.84728 3.9 10.356C3.9 11.7161 4.44708 12.8839 5.16092 13.8728C5.81091 14.7732 6.60399 15.5317 7.25562 16.1548C7.31873 16.2152 7.38052 16.2743 7.44073 16.3321L7.4409 16.3323C9.07302 17.8927 10.8293 20.0437 11.4911 21.1156C11.5124 21.1547 11.5541 21.193 11.614 21.193C11.6739 21.193 11.7156 21.1547 11.7369 21.1156C12.3987 20.0437 14.155 17.8927 15.7871 16.3323L15.7873 16.3321C15.8542 16.2678 15.9232 16.2019 15.9937 16.1345C16.6411 15.5161 17.4241 14.7682 18.067 13.8796C18.781 12.8928 19.328 11.7251 19.328 10.356C19.328 7.84728 17.585 5.9 15.448 5.9C14.041 5.9 12.4559 6.55556 11.6129 8.51102Z"
                            fill="#224A99"
                            stroke="#224A99"
                            stroke-width="0.2"
                          />
                        </svg>
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
                        <div className={styles.text3}>
                          {" "}
                          (사)성원근로장애인협회 중앙사업단
                        </div>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6129 8.51102C10.738 6.5567 9.18852 5.9 7.78 5.9C5.64304 5.9 3.9 7.84728 3.9 10.356C3.9 11.7161 4.44708 12.8839 5.16092 13.8728C5.81091 14.7732 6.60399 15.5317 7.25562 16.1548C7.31873 16.2152 7.38052 16.2743 7.44073 16.3321L7.4409 16.3323C9.07302 17.8927 10.8293 20.0437 11.4911 21.1156C11.5124 21.1547 11.5541 21.193 11.614 21.193C11.6739 21.193 11.7156 21.1547 11.7369 21.1156C12.3987 20.0437 14.155 17.8927 15.7871 16.3323L15.7873 16.3321C15.8542 16.2678 15.9232 16.2019 15.9937 16.1345C16.6411 15.5161 17.4241 14.7682 18.067 13.8796C18.781 12.8928 19.328 11.7251 19.328 10.356C19.328 7.84728 17.585 5.9 15.448 5.9C14.041 5.9 12.4559 6.55556 11.6129 8.51102Z"
                            fill="#224A99"
                            stroke="#224A99"
                            stroke-width="0.2"
                          />
                        </svg>
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
                        <div className={styles.text3}>
                          (의료법인)오성의료재단동군산병원
                        </div>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6129 8.51102C10.738 6.5567 9.18852 5.9 7.78 5.9C5.64304 5.9 3.9 7.84728 3.9 10.356C3.9 11.7161 4.44708 12.8839 5.16092 13.8728C5.81091 14.7732 6.60399 15.5317 7.25562 16.1548C7.31873 16.2152 7.38052 16.2743 7.44073 16.3321L7.4409 16.3323C9.07302 17.8927 10.8293 20.0437 11.4911 21.1156C11.5124 21.1547 11.5541 21.193 11.614 21.193C11.6739 21.193 11.7156 21.1547 11.7369 21.1156C12.3987 20.0437 14.155 17.8927 15.7871 16.3323L15.7873 16.3321C15.8542 16.2678 15.9232 16.2019 15.9937 16.1345C16.6411 15.5161 17.4241 14.7682 18.067 13.8796C18.781 12.8928 19.328 11.7251 19.328 10.356C19.328 7.84728 17.585 5.9 15.448 5.9C14.041 5.9 12.4559 6.55556 11.6129 8.51102Z"
                            fill="#224A99"
                            stroke="#224A99"
                            stroke-width="0.2"
                          />
                        </svg>
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
                      <div className={styles.text3}>대한적십자사</div>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6129 8.51102C10.738 6.5567 9.18852 5.9 7.78 5.9C5.64304 5.9 3.9 7.84728 3.9 10.356C3.9 11.7161 4.44708 12.8839 5.16092 13.8728C5.81091 14.7732 6.60399 15.5317 7.25562 16.1548C7.31873 16.2152 7.38052 16.2743 7.44073 16.3321L7.4409 16.3323C9.07302 17.8927 10.8293 20.0437 11.4911 21.1156C11.5124 21.1547 11.5541 21.193 11.614 21.193C11.6739 21.193 11.7156 21.1547 11.7369 21.1156C12.3987 20.0437 14.155 17.8927 15.7871 16.3323L15.7873 16.3321C15.8542 16.2678 15.9232 16.2019 15.9937 16.1345C16.6411 15.5161 17.4241 14.7682 18.067 13.8796C18.781 12.8928 19.328 11.7251 19.328 10.356C19.328 7.84728 17.585 5.9 15.448 5.9C14.041 5.9 12.4559 6.55556 11.6129 8.51102Z"
                          fill="#224A99"
                          stroke="#224A99"
                          stroke-width="0.2"
                        />
                      </svg>
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
