import axios from "axios";
import BASE_URL from "./APIconfig";

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

interface inputPetInfo {
  petId: number;
  petName: string;
  petBirth: string;
  petType: string; // 강아지 고양이
  petGender: string; // 여아 남아
  specie: string;
  // petImage: File;
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
    return userResponse.data.data;
  } catch (error) {
    console.error("유저 회원 가입 실패:", error);
  }
};
