import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = process.env.REACT_APP_AUTH_API;

  const handleLogin = async () => {
    if (!username || !password) {
      alert("사용자 이름과 비밀번호를 입력해주세요.");
      return;
    }

    // TODO: 서버에 요청을 보내고, 응답 처리
    try {
      alert(`Username: ${username}, Password: ${password}`);

      // 서버에 요청을 보내는 예시
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: username, password }),
      });
      const data = await response.json();
      const token = data.access_token;

      //token을 쿠기에 저장
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Error during login:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        로그인
      </Button>
    </div>
  );
};

export default Login;
