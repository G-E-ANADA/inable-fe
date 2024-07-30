import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import useAuthStore from "../store/store";
import User from "../entities/User";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = process.env.REACT_APP_AUTH_API;

  if (useAuthStore.getState().token) {
    // '/'로 이동
    alert("이미 로그인되어 있습니다.");
    window.location.href = "/";
  }

  const handleLogin = async () => {
    if (!username || !password) {
      alert("사용자 이름과 비밀번호를 입력해주세요.");
      return;
    }

    const access_token = await getAccessToken();
    useAuthStore.getState().setToken(access_token);

    const userInfo = await getUserInfo(access_token);
    useAuthStore.getState().setUser(userInfo);
    console.log(userInfo);

    if (!access_token || !userInfo) {
      alert("로그인에 실패했습니다.");
      return;
    }

    alert("로그인되었습니다.");
    window.location.href = "/";
  };

  const getAccessToken = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: username, password }),
      });
      const data = await response.json();
      const access_token = data.access_token;
      return access_token;
    } catch (error) {
      console.error("Error during getAccessToken:", error);
    }
  };

  const getUserInfo = async (access_token: string) => {
    try {
      const response = await fetch(`${API_URL}/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const data = await response.json();
      return User.craeteUser(data);
    } catch (error) {
      console.error("Error during getUserInfo:", error);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Login;
