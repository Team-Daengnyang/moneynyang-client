import axios from "axios";
import { BASE_URL } from "./APIconfig";

export const getUserInfo = async (token: string) => {
  try {
    const userResponse = await axios.get(`${BASE_URL}/api/v1/members/info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return userResponse.data.data;
  } catch (error) {
    console.log("회원 정보 조회 오류: ", error);
    throw error;
  }
};

export const getPetInfo = async (token: string) => {
  try {
    const petResponse = await axios.get(`https://moneynyang.site/api/v1/pets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return petResponse.data.data;
  } catch (error) {
    console.log("반려동물 정보 조회 오류: ", error);
    throw error;
  }
};

export const getAccountInfo = async (token: string) => {
  try {
    const accountResponse = await axios.get(
      `https://moneynyang.site/api/v1/accounts/info`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(accountResponse.data.data);
    return accountResponse.data.data;
  } catch (error) {
    console.log("계좌 정보 조회 오류: ", error);
    throw error;
  }
};

interface Member {
  email: string;
  password: string;
}

export const Login = async (member: Member) => {
  try {
    const response = await axios.post(
      `https://moneynyang.site/api/v1/members/login`,
      {
        email: member.email,
        password: member.password,
      }
    );
    return response.data.data.accessToken;
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

interface inputUserInfo {
  email: string;
  password: string;
  name: string;
}

export const registerUser = async (inputUserInfo: inputUserInfo) => {
  try {
    const userResponse = await axios.post(
      `https://moneynyang.site/api/v1/members`,
      {
        email: inputUserInfo.email,
        password: inputUserInfo.password,
        name: inputUserInfo.name,
      }
    );
    return userResponse?.data?.data.accessToken;
  } catch (error) {
    console.error("유저 회원 가입 실패:", error);
  }
};

interface inputPetInfo {
  petId: number;
  petName: string;
  petBirth: string;
  petType: string; // 강아지 고양이
  petGender: string; // 여아 남아
  specie: string;
  petImage: File | null;
}

export const registerPet = async (
  inputPetInfo: inputPetInfo,
  token: string
) => {
  try {
    const formData = new FormData();

    // 텍스트 필드를 FormData에 추가
    formData.append("petName", inputPetInfo.petName);
    formData.append("petBirth", inputPetInfo.petBirth || "");
    formData.append("petType", inputPetInfo.petType);
    formData.append("petGender", inputPetInfo.petGender);
    formData.append("specie", inputPetInfo.specie || "");

    // 이미지 파일을 FormData에 추가
    if (inputPetInfo.petImage) {
      formData.append("petImage", inputPetInfo.petImage);
    }
    // 반려동물 정보 저장 요청
    await axios.post(`https://moneynyang.site/api/v1/pets`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("반려 동물 등록 실패:", error);
  }
};

export const sendMoney = async (
  { account, amount }: { account: string; amount: number },
  token: string
) => {
  try {
    const sendResponse = await axios.post(
      `https://moneynyang.site/api/v1/accounts/transfer`,
      {
        account,
        amount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return sendResponse?.data?.data;
  } catch (error) {
    console.error("송금하기 실패:", error);
  }
};

export const updateAnimal = async (
  { account, amount }: { account: string; amount: number },
  token: string
) => {
  try {
    const sendResponse = await axios.post(
      `https://moneynyang.site/api/v1/accounts/transfer`,
      {
        account,
        amount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return sendResponse?.data?.data;
  } catch (error) {
    console.error("송금하기 실패:", error);
  }
};

export const updatePet = async (inputPetInfo: inputPetInfo, token: string) => {
  try {
    const formData = new FormData();

    // 텍스트 필드를 FormData에 추가
    formData.append("petName", inputPetInfo.petName);
    formData.append("petBirth", inputPetInfo.petBirth || "");
    formData.append("petType", inputPetInfo.petType);
    formData.append("petGender", inputPetInfo.petGender);
    formData.append("specie", inputPetInfo.specie || "");

    // 이미지 파일을 FormData에 추가
    if (inputPetInfo.petImage) {
      formData.append("petImage", inputPetInfo.petImage);
    }
    // 반려동물 정보 저장 요청
    await axios.patch(`https://moneynyang.site/api/v1/pets`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("반려 동물 수정 실패:", error);
  }
};
