import styles from "../css/Home.module.css";
import useAuthStore from "../store/store";
import searchIcon from "../asset/searchIcon.svg";
import { useState } from "react";

const Home = ({}) => {
  const API_URL = process.env.REACT_APP_AI_API;
  const loginUser = useAuthStore.getState().user;

  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

  const chatbotHandler = async () => {
    setAnimate(true);
    queryToAI();
  };

  const queryToAI = async () => {
    // EventSource를 사용하여 SSE 연결
    const eventSource = new EventSource(
      `${API_URL}/api/v1/chatlog/jayden/ai?query=${query}`
    );

    // 데이터 수신 시 처리
    eventSource.onmessage = (event) => {
      setData((prevData) => prevData + event.data);
    };

    // 오류 처리
    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close(); // 필요시 연결 닫기
    };

    // 컴포넌트 언마운트 시 EventSource 닫기
    return () => {
      eventSource.close();
    };
  };

  return (
    <div className={styles.home}>
      <div
        className={`${styles.chatbotContainer} ${
          animate ? styles.animateChatbotContainer : ""
        } `}
      >
        <div
          className={`${styles.chatboLabelContainer} ${
            animate ? styles.hideChatboLabelContainer : ""
          } `}
        >
          {loginUser ? (
            <p className={styles.p}>{`${loginUser.name}님,`}</p>
          ) : (
            <p className={styles.p}>반갑습니다</p>
          )}
          <p className={styles.p}>{`어떤 일자리를 찾고 계신가요? `}</p>
        </div>

        <div
          className={`${styles.chatbotChattingContainer} ${
            animate ? styles.animateChatbotChattingContainer : ""
          } `}
        >
          <div className={styles.horizontalContainer2}>
            <div className={styles.timeLabel}>2024-07-21-일</div>
          </div>

          <div
            className={`${styles.chatContainer} ${
              animate ? styles.animateChatContainer : ""
            } `}
          >
            <div className={styles.buttonContainer}>
              <div className={styles.buttonContainer1}>
                <div className={styles.div5}>12:09</div>
                <div className={styles.userChatBox}>
                  <div className={styles.chatBox}>
                    동작구에 사무보조로 지원할 수 있는 일자리 알려줘
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.horizontalContainer3}>
              <div className={styles.horizontalContainer4}>
                <div className={styles.horizontalContainer5}>
                  <div
                    className={styles.chatBox}
                    dangerouslySetInnerHTML={{ __html: data }}
                  ></div>
                </div>
                <div className={styles.div5}>12:09</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chatbotInputBoxContainer}>
          <input
            className={styles.div37}
            placeholder="무엇이든 물어보세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button className={styles.frameChild} onClick={chatbotHandler}>
            <img src={searchIcon} />
          </button>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.realtimeJobInfoContainer}>
          <div className={styles.areaLabel}>실시간 채용 정보</div>
          <div className={styles.realtimeJobInfoContent}>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <div className={styles.div}>한국환경보전원</div>
                <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                <div className={styles.div}>7월 10일 지원 마감</div>
              </div>
              <img className={styles.image48Icon} alt="" src="image 48.png" />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <div className={styles.div}>한국환경보전원</div>
                <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                <div className={styles.div}>7월 10일 지원 마감</div>
              </div>
              <img className={styles.image48Icon} alt="" src="image 48.png" />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <div className={styles.div}>한국환경보전원</div>
                <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                <div className={styles.div}>7월 10일 지원 마감</div>
              </div>
              <img className={styles.image48Icon} alt="" src="image 48.png" />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <div className={styles.div}>한국환경보전원</div>
                <div className={styles.div1}>[계약직] 사무보조원 모집</div>
                <div className={styles.div}>7월 10일 지원 마감</div>
              </div>
              <img className={styles.image48Icon} alt="" src="image 48.png" />
            </div>
          </div>
        </div>

        <div className={styles.eduInfoContainer}>
          <div className={styles.areaLabel}>교육 정보</div>
          <div className={styles.eduInfoContent}>
            <div className={styles.parent2}>
              <div className={styles.div}>1차 직무지도원 양성과정</div>
              <div className={styles.div}>1차 직무지도원 양성과정</div>
              <div className={styles.div}>1차 직무지도원 양성과정</div>
              <div className={styles.div}>1차 직무지도원 양성과정</div>
              <div className={styles.div}>1차 직무지도원 양성과정</div>
              <div className={styles.div}>1차 직무지도원 양성과정</div>
              <div className={styles.div}>1차 직무지도원 양성과정</div>
            </div>
          </div>
        </div>

        <div className={styles.communityContainer}>
          <div className={styles.areaLabel}>커뮤니티</div>
          <div className={styles.communityContent}>
            <div className={styles.frameParent2}>
              <div className={styles.parent3}>
                <div className={styles.div}>면접 잘 보는 법</div>
                <div className={styles.div20}>재들린</div>
              </div>
              <div className={styles.parent3}>
                <div className={styles.div}>면접 잘 보는 법</div>
                <div className={styles.div20}>재들린</div>
              </div>
              <div className={styles.parent3}>
                <div className={styles.div}>면접 잘 보는 법</div>
                <div className={styles.div20}>재들린</div>
              </div>
              <div className={styles.parent3}>
                <div className={styles.div}>면접 잘 보는 법</div>
                <div className={styles.div20}>재들린</div>
              </div>
              <div className={styles.parent3}>
                <div className={styles.div}>면접 잘 보는 법</div>
                <div className={styles.div20}>재들린</div>
              </div>
              <div className={styles.parent3}>
                <div className={styles.div}>면접 잘 보는 법</div>
                <div className={styles.div20}>재들린</div>
              </div>
              <div className={styles.parent3}>
                <div className={styles.div}>면접 잘 보는 법</div>
                <div className={styles.div20}>재들린</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
