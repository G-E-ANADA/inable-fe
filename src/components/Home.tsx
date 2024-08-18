import styles from "../css/Home.module.css";
import useAuthStore from "../store/store";
import searchIcon from "../asset/searchIcon.svg";

const Home = ({}) => {
  const loginUser = useAuthStore.getState().user;

  return (
    <div className={styles.home}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <div className={styles.div}>한국환경보전원</div>
            <div className={styles.div1}>[계약직] 사무보조원 모집</div>
            <div className={styles.div}>7월 10일 지원 마감</div>
          </div>
          <img className={styles.image48Icon} alt="" src="image 48.png" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.group}>
            <div className={styles.div}>한국환경보전원</div>
            <div className={styles.div1}>[계약직] 사무보조원 모집</div>
            <div className={styles.div}>7월 10일 지원 마감</div>
          </div>
          <img className={styles.image48Icon1} alt="" src="image 48.png" />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.parent}>
            <div className={styles.div}>한국환경보전원</div>
            <div className={styles.div1}>[계약직] 사무보조원 모집</div>
            <div className={styles.div}>7월 10일 지원 마감</div>
          </div>
          <img className={styles.image48Icon2} alt="" src="image 48.png" />
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.group}>
            <div className={styles.div}>한국환경보전원</div>
            <div className={styles.div1}>[계약직] 사무보조원 모집</div>
            <div className={styles.div}>7월 10일 지원 마감</div>
          </div>
          <img className={styles.image48Icon3} alt="" src="image 48.png" />
        </div>
      </div>
      <div className={styles.homeInner}>
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
      <div className={styles.homeChild}>
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
      <div className={styles.div33}>커뮤니티</div>
      <div className={styles.div34}>실시간 채용 정보</div>
      <div className={styles.div35}>교육 정보</div>
      <div className={styles.parent10}>
        <div className={styles.div36}>
          {loginUser ? (
            <p className={styles.p}>{`${loginUser.name}님,`}</p>
          ) : (
            <p className={styles.p}>반갑습니다</p>
          )}
          <p className={styles.p}>{`어떤 일자리를 찾고 계신가요? `}</p>
        </div>
        <div className={styles.parent11}>
          <div className={styles.div37}>무엇이든 물어보세요</div>
          <button className={styles.frameChild}>
            <img src={searchIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
