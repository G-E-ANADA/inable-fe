import { useState } from "react";
import Header from "../components/Header";
import styles from "../css/Signup.module.css";
import User from "../entities/User";
import useAuthStore from "../store/store";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const API_URL = process.env.REACT_APP_AUTH_API;

  //   if (useAuthStore.getState().token) {
  //     // '/'로 이동
  //     alert("이미 로그인되어 있습니다.");
  //     window.location.href = "/";
  //   }

  //   const handleLogin = async () => {
  //     if (!username || !password) {
  //       alert("사용자 이름과 비밀번호를 입력해주세요.");
  //       return;
  //     }

  //     const access_token = await getAccessToken();
  //     useAuthStore.getState().setToken(access_token);

  //     const userInfo = await getUserInfo(access_token);
  //     useAuthStore.getState().setUser(userInfo);
  //     console.log(userInfo);

  //     if (!access_token || !userInfo) {
  //       alert("로그인에 실패했습니다.");
  //       return;
  //     }

  //     alert("로그인되었습니다.");
  //     window.location.href = "/";
  //   };

  //   const getAccessToken = async () => {
  //     try {
  //       const response = await fetch(`${API_URL}/auth/login`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ uid: username, password }),
  //       });
  //       const data = await response.json();
  //       const access_token = data.access_token;
  //       return access_token;
  //     } catch (error) {
  //       console.error("Error during getAccessToken:", error);
  //     }
  //   };

  //   const getUserInfo = async (access_token: string) => {
  //     try {
  //       const response = await fetch(`${API_URL}/profile`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${access_token}`,
  //         },
  //       });
  //       const data = await response.json();
  //       return User.craeteUser(data);
  //     } catch (error) {
  //       console.error("Error during getUserInfo:", error);
  //     }
  //   };

  return (
    <>
      <Header></Header>
      <div className={styles.div}>
        <div className={styles.parent}>
          <div className={styles.div1}>회원가입</div>
          <div className={styles.frameParent}>
            <div className={styles.group}>
              <div className={styles.div2}>아이디</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="아이디를 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.div2}>비밀번호</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.div2}>비밀번호 확인</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={passwordCheck}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  placeholder="비밀번호를 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.parent1}>
              <div className={styles.div2}>이메일</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.parent2}>
              <div className={styles.div2}>이름*</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.parent3}>
              <div className={styles.div2}>성별*</div>
              <div className={styles.frameGroup}>
                <div className={styles.radioParent}>
                  <div className={styles.radio}>
                    <div className={styles.padding}>
                      <input
                        type="radio"
                        name="gender"
                        className={styles.input}
                        value="MALE"
                        checked={gender === "MALE"}
                        onChange={(e) => setGender(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className={styles.div8}>남자</div>
                </div>
                <div className={styles.radioParent}>
                  <div className={styles.radio}>
                    <div className={styles.padding}>
                      <input
                        type="radio"
                        name="gender"
                        className={styles.input}
                        value="FEMALE"
                        checked={gender === "FEMALE"}
                        onChange={(e) => setGender(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className={styles.div8}>여자</div>
                </div>
              </div>
            </div>
            <div className={styles.parent4}>
              <div className={styles.div2}>연락처*</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="연락처를 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.parent5}>
              <div className={styles.div2}>주소*</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="주소를 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.parent6}>
              <div className={styles.div2}>생년월일*</div>
              <div className={styles.selectParent}>
                <FormControl size="small" variant="outlined" fullWidth>
                  <InputLabel id="select-label">Label</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select-demo"
                    // value={value}
                    label="년도"
                    // onChange={handleChange}
                  >
                    <MenuItem value={1995}>1995</MenuItem>
                    <MenuItem value={1996}>1996</MenuItem>
                    <MenuItem value={1997}>1997</MenuItem>
                    <MenuItem value={1998}>1998</MenuItem>
                    <MenuItem value={1999}>1999</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="small" variant="outlined" fullWidth>
                  <InputLabel id="select-label">Label</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select-demo"
                    // value={value}
                    label="월"
                    // onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="small" variant="outlined" fullWidth>
                  <InputLabel id="select-label">Label</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select-demo"
                    // value={value}
                    label="일"
                    // onChange={handleChange}
                  >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={31}>31</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={styles.btn}>
              <div className={styles.text}>회원가입</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
