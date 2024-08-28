import create from "zustand";

// 회원가입 정보
interface inputUserInfo {
  email: string;
  password: string;
  name: string;
}

interface inputPetInfo {
  petId: number;
  petName: string;
  petBirth: string;
  petType: string; // 강아지 고양이
  petGender: string; // 여아 남아
  specie: string;
  // petImage: File;
}

interface StoreState {
  inputUserInfo: inputUserInfo;
  setInputUserInfo: (newInfo: Partial<inputUserInfo>) => void; // 부분적 업데이트를 허용

  inputPetInfo: inputPetInfo;
  setInputPetInfo: (newInfo: Partial<inputPetInfo>) => void; // 부분적 업데이트를 허용
}

const useSignupStore = create<StoreState>((set) => ({
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

  inputPetInfo: {
    petId: 0,
    petName: "",
    petGender: "",
    petType: "",
    petBirth: "",
    specie: "",
    // petImage: new File(
    //   [],
    //   `${import.meta.env.VITE_PUBLIC_URL}/src/assets/Signup/picture.png`
    // ) as File,
  },
  setInputPetInfo: (newInfo) =>
    set((state) => ({
      inputPetInfo: { ...state.inputPetInfo, ...newInfo },
    })),
}));

export default useSignupStore;
