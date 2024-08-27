import create from "zustand";
import { persist } from "zustand/middleware";

// 회원가입 정보
interface inputUserInfo {
  email: string;
  password: string;
  name: string;
}

// 내 정보 조회
interface UserInfo {
  memberId: number;
  memberName: string;
  memberImage: string;
  memberLevel: number;
  memberPoint: number;
  memberTarget: number;
}

interface PetInfo {
  petId: number;
  petName: string;
  petBirth: string;
  petType: string; // 강아지 고양이
  petGender: string; // 여아 남아
  specie: string;
  petImage: File;
}

interface StoreState {
  inputUserInfo: inputUserInfo;
  setInputUserInfo: (newInfo: Partial<inputUserInfo>) => void; // 부분적 업데이트를 허용

  userInfo: UserInfo;
  setUserInfo: (newInfo: Partial<UserInfo>) => void; // 부분적 업데이트를 허용
  petInfo: PetInfo;
  setPetInfo: (newInfo: Partial<PetInfo>) => void; // 부분적 업데이트를 허용
  token: string;
  setToken: (newInfo: string) => void;
}

const useUserStore = create(
  persist<StoreState>(
    (set) => ({
      // 회원 가입을 위한 정보
      inputUserInfo: {
        email: "",
        password: "",
        name: "",
      },
      setInputUserInfo: (newInfo) =>
        set((state) => ({
          inputUserInfo: { ...state.inputUserInfo, ...newInfo },
        })),

      // 스토어에 저장할 유저 정보
      userInfo: {
        memberId: 0,
        memberName: "",
        memberImage: "",
        memberLevel: 0,
        memberPoint: 0,
        memberTarget: 0,
      },
      setUserInfo: (newInfo) =>
        set((state) => ({
          userInfo: { ...state.userInfo, ...newInfo },
        })),
      petInfo: {
        petId: 0,
        petName: "",
        petGender: "",
        petType: "",
        petBirth: "",
        specie: "",
        petImage: new File(
          [],
          `${import.meta.env.VITE_PUBLIC_URL}/src/assets/Signup/picture.png`
        ) as File,
      },
      setPetInfo: (newInfo) =>
        set((state) => ({
          petInfo: { ...state.petInfo, ...newInfo },
        })),

      token: "",
      setToken: (newInfo: string) => set(() => ({ token: newInfo })),
    }),
    {
      name: "userStorage",
    }
  )
);

export default useUserStore;
