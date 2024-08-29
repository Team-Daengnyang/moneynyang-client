import axios from "axios";
import { BASE_URL } from "./APIconfig";

//펫 보험 리스트 조회하기
export const getInsuranceDatas = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/insurances`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("펫 보험 조회 : ", response);
    return response.data;
  } catch (error) {
    console.log("펫 보험 조회하기 에러 : ", error);
  }
};

//펫 보험 상세 조회하기
export const getInsuranceDetail = async (insuranceId: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/insurances/${insuranceId}`
    );
  } catch (error) {
    console.log("펫 보험 상세 조회하기 에러", error);
  }
};
