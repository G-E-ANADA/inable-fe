import { useState } from "react";
import Header from "../components/Header";
import styles from "../css/Signup.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useAuthStore from "../store/store";

const Signup = () => {
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

  if (useAuthStore.getState().token) {
    // '/'로 이동
    alert("이미 로그인되어 있습니다.");
    window.location.href = "/";
  }

  const handleSignup = async () => {
    const parameter = {
      name,
      uid: email,
      password,
      gender,
      phone: number,
      address,
      birth_year: birthYear,
      birth_month: birthMonth,
      birth_date: birthDate,
    };
    await useAuthStore
      .getState()
      .handleSignup(
        name,
        email,
        password,
        gender,
        number,
        address,
        birthYear,
        birthMonth,
        birthDate
      );
  };

  return (
    <>
      <Header></Header>
      <div className={styles.div}>
        <div className={styles.parent}>
          <div className={styles.div1}>회원가입</div>
          <div className={styles.frameParent}>
            <div className={styles.group}>
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
            <div className={styles.parent2}>
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
            <div className={styles.parent3}>
              <div className={styles.div2}>연락처*</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="연락처를 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.parent4}>
              <div className={styles.div2}>주소*</div>
              <div className={styles.textfield}>
                <input
                  className={styles.input}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="주소를 입력해 주세요"
                ></input>
              </div>
            </div>
            <div className={styles.parent5}>
              <div className={styles.div2}>생년월일*</div>
              <div className={styles.selectParent}>
                <FormControl size="small" variant="outlined" fullWidth>
                  <InputLabel id="select-label">Label</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select-demo"
                    value={birthYear}
                    label="년도"
                    onChange={(e) => setBirthYear(e.target.value)}
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
                    value={birthMonth}
                    label="월"
                    onChange={(e) => setBirthMonth(e.target.value)}
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
                    value={birthDate}
                    label="일"
                    onChange={(e) => setBirthDate(e.target.value)}
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
              <div className={styles.text} onClick={handleSignup}>
                회원가입
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
