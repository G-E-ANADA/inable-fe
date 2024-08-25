import create from "zustand";
import { persist } from "zustand/middleware";
import {User} from "../entities/User";

const API_URL = process.env.REACT_APP_AUTH_API;
const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: null, user: null }),
      setUser: (user: User) => set({ user }),
      handleLogin: async (username: string, password: string) => {
        if (!username || !password) {
          alert("사용자 이름과 비밀번호를 입력해주세요.");
          return;
        }
        console.log(username + " " + password);

        const access_token = await useAuthStore
          .getState()
          .getAccessToken(username, password);
        useAuthStore.getState().setToken(access_token);

        const userInfo = await useAuthStore
          .getState()
          .getUserInfo(access_token);
        useAuthStore.getState().setUser(userInfo);
        console.log(userInfo);

        if (!access_token || !userInfo) {
          alert("로그인에 실패했습니다.");
          return;
        }

        alert("로그인되었습니다.");
        window.location.href = "/";
      },
      getAccessToken: async (username: string, password: string) => {
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
          console.log(access_token);
          return access_token;
        } catch (error) {
          console.error("Error during getAccessToken:", error);
        }
      },
      getUserInfo: async (access_token: string) => {
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
      },
      handleSignup: async (
        name: string,
        email: string,
        password: string,
        gender: string,
        number: string,
        address: string,
        birthYear: string,
        birthMonth: string,
        birthDate: string
      ) => {
        try {
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

          const response = await fetch(`${API_URL}/member`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(parameter),
          });
          const data = await response.json();
          console.log(parameter);
          console.log(data);

          alert("회원가입 되었습니다.");
          await useAuthStore.getState().handleLogin(email, password);
        } catch (error) {
          alert("회원가입 실패.");
          console.error("Error during getAccessToken:", error);
        }
      },
    }),
    {
      name: "auth-storage", // storage 이름을 설정합니다.
      getStorage: () => localStorage, // 기본값으로 localStorage를 사용합니다.
    }
  )
);

export default useAuthStore;
