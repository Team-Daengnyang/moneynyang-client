import create from "zustand";

interface UserInfo {
  memberId: BigInt;
  memberImage: string;
  memberLevel: BigInt;
  memberPoint: number;
  memberTarget: number;
}

interface PetInfo {
  petId: BigInt;
  petName: string;
  petBirth: string;
  petType: string;
  petGender: string;
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

const useUserStore = create<StoreState>((set) => ({
  userInfo: {
    memberId: 0n,
    memberImage: "",
    memberLevel: 0n,
    memberPoint: 0,
    memberTarget: 0,
  },
  setUserInfo: (newInfo) =>
    set((state) => ({
      userInfo: { ...state.userInfo, ...newInfo },
    })),

  petInfo: {
    petId: 0n,
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
  setToken: (newInfo) => set((state) => ({ token: state.token, newInfo })),
}));

export default useUserStore;
