import create from "zustand";
import { persist } from "zustand/middleware";

// 내 정보 조회
interface UserInfo {
  memberId: number;
  memberName: string;
  memberImage: string;
  memberLevel: number;
  memberPoint: number;
  memberTarget: number;
  memberDate: number;
}

interface PetInfo {
  petId: number;
  petName: string;
  petBirth: string;
  petType: string; // 강아지 고양이
  petGender: string; // 여아 남아
  specie: string;
  petImage: string;
}

interface StoreState {
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
      userInfo: {
        memberId: 0,
        memberName: "",
        memberImage: "",
        memberLevel: 0,
        memberPoint: 0,
        memberTarget: 0,
        memberDate: 0,
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
        petImage: "",
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
