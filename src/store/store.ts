import create from "zustand";
import { persist } from "zustand/middleware";
import User from "../entities/User";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: User,
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: null }),
      setUser: (user: User) => set({ user }),
    }),
    {
      name: "auth-storage", // storage 이름을 설정합니다.
      getStorage: () => localStorage, // 기본값으로 localStorage를 사용합니다.
    }
  )
);

export default useAuthStore;
