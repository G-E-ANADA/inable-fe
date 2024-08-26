import { FunctionComponent } from "react";
import styles from "../css/ApplicantResumePage.module.css";
import Header from "../components/Header";

const ApplicantResumePage: FunctionComponent = () => {
  return (
    <>
      <Header />

      <div className={styles.div}>
        <div className={styles.verticalContainer}>
          <div className={styles.textInput}>
            <div className={styles.text}>지원자 이력서 상세</div>
          </div>
          <div className={styles.verticalContainer1}>
            <div className={styles.paragraphContainer}>
              <div className={styles.div2}>제목</div>
              <div className={styles.div3}>
                안녕하세요. 최고가 되고 싶은 팜하니입니다.
              </div>
            </div>
            <div className={styles.textInput1} />
            <div className={styles.paragraphContainer}>
              <div className={styles.div2}>자기소개</div>
              <div className={styles.uiContainer}>
                <p
                  className={styles.ui}
                >{`"최고가 되기 위해서" 금융결제원은 국내 다양한 금융 관련 서비스를 지원하는 최고의 기업입니다. 이런 여러 서비스 운영에 있어 중요한 것은 사용자에게 적절한 UI의 표출, 그리고 효율적인 데이터 처리를 통한 빠른 속도 제공입니다. 저는 이를 배우기 위해 매일 진행 중인 알고리즘 풀이 외에도 기존에 공부했던 JSP에 대해 조금 더 파악하고, spring에 활용하기 전에 `}</p>
                <p
                  className={styles.ui}
                >{`배우기 위해 관련 학원에 다니며 공부하였고, 여러 예제를 사용한 Spring 프로젝트를 진행했습니다. 그리고 JPA를 사용하는 여러 방식과 주의점, querydsl 등 많은 부분에의 공부를 해 보았습니다. 백엔드 이외에도 front-end에 활용되는 javascript의 기능 활용을 더 잘 알기 위해, vanilla JS를 사용하여 조금씩 난도를 높여가며 `}</p>
                <p
                  className={styles.ui}
                >{`프로젝트를 진행 중입니다. 그렇게 실력을 쌓아 가던 중 운이 좋게도 그동안 제가 공부하였고 앞으로의 진로로 결정하게 된 java spring이 기반이 되는 `}</p>
                <p className={styles.ui}>
                  전산직 사무원을 채용한다는 소식을 들었고, 최고의 기업에서 가장
                  좋아하는 공부를 할 수 있을 것이라는 기대감을 품고 지원하게
                  되었습니다.
                </p>
              </div>
            </div>
            <div className={styles.textInput1} />
            <div className={styles.paragraphContainer}>
              <div className={styles.div2}>경력</div>
              <div className={styles.uiContainer}>
                <p
                  className={styles.ui}
                >{`"최고가 되기 위해서" 금융결제원은 국내 다양한 금융 관련 서비스를 지원하는 최고의 기업입니다. 이런 여러 서비스 운영에 있어 중요한 것은 사용자에게 적절한 UI의 표출, 그리고 효율적인 데이터 처리를 통한 빠른 속도 제공입니다. 저는 이를 배우기 위해 매일 진행 중인 알고리즘 풀이 외에도 기존에 공부했던 JSP에 대해 조금 더 파악하고, spring에 활용하기 전에 `}</p>
                <p
                  className={styles.ui}
                >{`배우기 위해 관련 학원에 다니며 공부하였고, 여러 예제를 사용한 Spring 프로젝트를 진행했습니다. 그리고 JPA를 사용하는 여러 방식과 주의점, querydsl 등 많은 부분에의 공부를 해 보았습니다. 백엔드 이외에도 front-end에 활용되는 javascript의 기능 활용을 더 잘 알기 위해, vanilla JS를 사용하여 조금씩 난도를 높여가며 `}</p>
                <p
                  className={styles.ui}
                >{`프로젝트를 진행 중입니다. 그렇게 실력을 쌓아 가던 중 운이 좋게도 그동안 제가 공부하였고 앞으로의 진로로 결정하게 된 java spring이 기반이 되는 `}</p>
                <p className={styles.ui}>
                  전산직 사무원을 채용한다는 소식을 들었고, 최고의 기업에서 가장
                  좋아하는 공부를 할 수 있을 것이라는 기대감을 품고 지원하게
                  되었습니다.
                </p>
              </div>
            </div>
            <div className={styles.textInput1} />
            <div className={styles.paragraphContainer}>
              <div className={styles.div2}>학력</div>
              <div className={styles.uiContainer}>
                <p className={styles.ui}>가나중학교 졸업 (2014.02.12)</p>
                <p className={styles.ui}>가나고등학교 졸업 (2017.02.20)</p>
                <p className={styles.ui}>가나대학교 졸업 (2021.02.15)</p>
              </div>
            </div>
            <div className={styles.textInput1} />
            <div className={styles.horizontalContainer}>
              <div className={styles.horizontalContainer1}>
                <div className={styles.paragraphContainer}>
                  <div className={styles.button}>
                    <div className={styles.div8}>장애 정보</div>
                  </div>
                  <div className={styles.uiContainer}>팜하니.jpg</div>
                </div>
                <div className={styles.paragraphContainer}>
                  <div className={styles.div2}>시력</div>
                  <div className={styles.horizontalContainer3}>
                    <div className={styles.horizontalContainer4}>
                      <div className={styles.div3}>무관</div>
                    </div>
                  </div>
                </div>
                <div className={styles.paragraphContainer}>
                  <div className={styles.div2}>드는힘</div>
                  <div className={styles.horizontalContainer3}>
                    <div className={styles.horizontalContainer4}>
                      <div className={styles.div3}>무관</div>
                    </div>
                  </div>
                </div>
                <div className={styles.paragraphContainer}>
                  <div className={styles.div2}>양손</div>
                  <div className={styles.horizontalContainer3}>
                    <div className={styles.horizontalContainer4}>
                      <div className={styles.div3}>무관</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textInput1} />
            <div className={styles.paragraphContainer}>
              <div className={styles.div2}>수상 및 기타</div>
              <div className={styles.uiContainer}>
                공공SW개발자 대회 수상 (2024.01.01)
              </div>
            </div>
            <div className={styles.horizontalContainer}>
              <div className={styles.paragraphContainer}>
                <div className={styles.div2}>스킬</div>
                <div className={styles.uiContainer}>
                  컴퓨터활용능력자격증 (2024.01.01)
                </div>
              </div>
            </div>
            <div className={styles.paragraphContainer}>
              <div className={styles.div2}>외국어</div>
              <div
                className={styles.uiContainer}
              >{`토익 IH (20204.01.01) `}</div>
            </div>
          </div>
        </div>
        <div className={styles.textInput9}>
          <div className={styles.btn}>
            <div className={styles.text}>닫기</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantResumePage;
