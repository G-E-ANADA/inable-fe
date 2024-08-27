import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import styles from "../css/Login.module.css";
import useAuthStore from "../store/store";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  if (useAuthStore.getState().token) {
    // '/'로 이동
    alert("이미 로그인되어 있습니다.");
    window.location.href = "/";
  }

  const handleLogin = async () => {
    useAuthStore.getState().handleLogin(username, password);
  };

  return (
    <>
      <Header></Header>
      <div className={styles.div}>
        <div className={styles.parent}>
          <div className={styles.div1}>
            {type === "personal" ? "개인 회원" : "기업 회원"} 로그인
          </div>
          <div className={styles.frameParent}>
            <div className={styles.group}>
              <div className={styles.div2}>아이디</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div2}>비밀번호</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <div className={styles.loginLabel} onClick={handleLogin}>
              로그인
            </div>
          </div>
          <div className={styles.btn1}>
            <div className={styles.text}>
              <a className={styles.text} href="/signup">
                회원가입
              </a>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div4}>아이디 찾기</div>
            <div className={styles.div4}>비밀번호 찾기</div>
          </div>
        </div>
        <div className={styles.parent1}>
          <div className={styles.div2}>다른 계정으로 로그인하기</div>
          <div className={styles.image50Parent}>
            <img className={styles.image50Icon} alt="" src="image 50.png" />
            <img className={styles.image50Icon} alt="" src="image 51.png" />
            <img className={styles.image52Icon} alt="" src="image 52.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
