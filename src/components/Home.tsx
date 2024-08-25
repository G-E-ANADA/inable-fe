import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; // ReactDOM을 명시적으로 import
import searchIcon from "../asset/searchIcon.svg";
import styles from "../css/Home.module.css";
import useAuthStore from "../store/store";
import Chat from "./chat/Chat";
import { useQuery } from "react-query";
import { fetchJobPostList, fetchEduPostList } from "../api/postsApi";
import { JobPostListData, EduPostListData } from "../types/PostDataType";
import { useNavigate } from "react-router-dom";

const Home = ({}) => {
  const API_URL = process.env.REACT_APP_AI_API;
  const loginUser = useAuthStore.getState().user;
  console.log(loginUser);

  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

  const [jobPosts, setJobPosts] = useState<JobPostListData[]>([]);
  const [eduPosts, setEduPosts] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const navigate = useNavigate(); // useNavigate 훅 호출

  const chatbotHandler = async () => {
    if (query === "") return;
    setAnimate(true);

    const userQuery = query;
    addChat("user", userQuery);
    setQuery("");
    queryToAI(userQuery);
  };

  const queryToAI = async (query: string) => {
    // EventSource를 사용하여 SSE 연결
    const eventSource = new EventSource(
      `${API_URL}/api/v1/chatlog/jayden/ai?query=${query}`
    );

    let accumulatedText = ""; // SSE로부터 수신된 데이터를 누적하는 변수
    let chatInstance: any; // 생성된 Chat 컴포넌트 인스턴스를 추적하기 위한 변수

    // SSE 이벤트 수신 시 처리
    eventSource.onmessage = (event) => {
      accumulatedText += event.data; // 수신된 데이터를 누적
      if (!chatInstance) {
        // 최초 수신 시 Chat 컴포넌트를 추가하고 chatInstance에 할당
        chatInstance = addChat("ai", accumulatedText);
      } else {
        // 이미 생성된 Chat 컴포넌트의 상태를 업데이트
        chatInstance.update(accumulatedText);
      }
    };

    // 오류 처리
    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close(); // 필요시 연결 닫기
      setData("");
    };

    // 컴포넌트 언마운트 시 EventSource 닫기
    return () => {
      eventSource.close();
    };
  };

  const addChat = (owner: "user" | "ai", text: string) => {
    // chatContainer 클래스에 Chat 컴포넌트 추가하는 코드
    const chatContainer = document.querySelector(`.${styles.chatContainer}`);

    // 새로운 div 요소를 생성하고 이를 chatContainer에 추가합니다.
    const newChatContainer = document.createElement("div");
    if (chatContainer === null) return;
    chatContainer.appendChild(newChatContainer);

    // 생성된 div 요소에 Chat 컴포넌트를 렌더링합니다.
    const root = ReactDOM.createRoot(newChatContainer);
    let currentText = text; // 현재 텍스트 상태를 추적하는 변수

    const update = (newText: string) => {
      currentText = newText;
      root.render(<Chat owner={owner} chat={currentText} />);
    };

    // 최초 렌더링
    update(text);

    // update 함수를 반환해서 나중에 상태 업데이트에 사용
    return { update };
  };

  //년월일 요일 구하기
  const getDay = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const dayOfWeekStr = ["일", "월", "화", "수", "목", "금", "토"];
    return `${year}-${month}-${day}-${dayOfWeekStr[dayOfWeek]}`;
  };

  // 실시간 채용 정보
  const { isLoading: jobPostsLoading, error: jobPostsError } = useQuery(
    ["jobPosts"],
    () =>
      fetchJobPostList({
        sort: "regDt",
      }),
    {
      onSuccess: (data) => {
        const processedData = data.job_posts
          .slice(0, 4)
          .map((jobPost: JobPostListData) => ({
            ...jobPost,
            area:
              jobPost.compAddr.split(" ")[0] +
              " " +
              jobPost.compAddr.split(" ")[1],
            envBothHands: jobPost.envBothHands.substring(
              0,
              jobPost.envBothHands.indexOf("작")
            ),
            envLiftPower: jobPost.envLiftPower.substring(
              0,
              jobPost.envLiftPower.indexOf("g") + 1
            ),
          }));

        setJobPosts(processedData);
        setShowLoading(false); // 데이터 로딩 완료 후 로딩 상태 해제
      },
      onError: () => setShowLoading(false), // 에러 발생 시 로딩 상태 해제
    }
  );

  // 교육 정보
  const { isLoading: eduPostsLoading, error: eduPostsError } = useQuery(
    ["eduPosts"],
    () => fetchEduPostList(),
    {
      onSuccess: (data) => {
        const processedData = data.edu_posts.slice(0, 7);
        setEduPosts(processedData);
        setShowLoading(false); // 데이터 로딩 완료 후 로딩 상태 해제
      },
      onError: () => setShowLoading(false), // 에러 발생 시 로딩 상태 해제
    }
  );

  useEffect(() => {
    if (jobPostsLoading || eduPostsLoading) {
      const timer = setTimeout(() => {
        setShowLoading(true);
      }, 200); // 200ms 후에 로딩 상태 표시

      return () => clearTimeout(timer);
    }
  }, [jobPostsLoading, eduPostsLoading]);

  const formatDate = (dateString: string): string => {
    dateString = dateString.split("T")[0];
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();

    return `${month}월 ${day}일`;
  };

  const handleJobInfoClick = (jobPost: JobPostListData) => {
    navigate(`/job-post/${jobPost.id}`, { state: { jobPost } });
  };

  const handleEduInfoClick = (eduPost: EduPostListData) => {
    navigate(`/eud-post/${eduPost.id}`, { state: { eduPost } });
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
            <div className={styles.timeLabel}>{getDay()}</div>
          </div>

          <div
            className={`${styles.chatContainer} ${
              animate ? styles.animateChatContainer : ""
            } `}
          >
            {/* <Chat owner="user" chat={query} /> */}
            {/* <Chat owner="ai" chat={data} /> */}
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
            {jobPosts.map((jobPost, index) => (
              <div
                className={styles.frameGroup}
                key={index}
                onClick={() => handleJobInfoClick(jobPost)}
              >
                <div className={styles.parent}>
                  <div className={styles.div}>{jobPost.busplaName}</div>{" "}
                  <div className={styles.div1}>
                    [{jobPost.empType}] {jobPost.jobNm} 모집
                  </div>{" "}
                  <div className={styles.div}>
                    {formatDate(jobPost.endDate)} 지원 마감
                  </div>{" "}
                </div>
                <img
                  className={styles.image48Icon}
                  alt=""
                  src={jobPost.compLogoUrl}
                />{" "}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.eduInfoContainer}>
          <div className={styles.areaLabel}>교육 정보</div>
          <div className={styles.eduInfoContent}>
            <div className={styles.parent2}>
              {eduPosts.length > 0 ? (
                eduPosts.map((eduPost, index) => (
                  <div
                    className={styles.div2}
                    key={index}
                    onClick={() => handleEduInfoClick(eduPost)}
                  >
                    {eduPost.title}
                  </div>
                ))
              ) : (
                <div className={styles.div}>교육 정보가 없습니다</div>
              )}
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
