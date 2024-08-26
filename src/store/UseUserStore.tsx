import create from "zustand";

// 사용자 정보의 타입 정의
interface UserInfo {
  username: string;
  email: string;
  password: string;
  // 추가 필드가 필요하면 여기에 정의
}

// 스토어의 상태 타입 정의
interface StoreState {
  userInfo: UserInfo;
  setUserInfo: (newInfo: Partial<UserInfo>) => void; // 부분적 업데이트를 허용
}

// Zustand 스토어 생성
const useStore = create<StoreState>((set) => ({
  userInfo: {
    username: "",
    email: "",
    password: "",
    // 추가 필드 초기값
  },
  setUserInfo: (newInfo) =>
    set((state) => ({
      userInfo: { ...state.userInfo, ...newInfo },
    })),
}));

export default useStore;
