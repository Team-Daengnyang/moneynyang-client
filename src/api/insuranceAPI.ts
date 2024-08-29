import axios from "axios";
import { BASE_URL } from "./APIconfig";

interface IInsuranceType {
  insuranceId: number;
  insuranceAge: string;
  insuranceType: string;
  title: string;
  companyImage: string;
  url: string;
  price: string;
  comment: string;
  summary: string;
}

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
    return response.data.data;
  } catch (error) {
    console.log("펫 보험 조회하기 에러 : ", error);
  }
};

//펫 보험 상세 조회하기
export const getInsuranceDetail = async (
  insuranceId: number,
  token: string
): Promise<IInsuranceType | undefined> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/insurances/${insuranceId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data.data as IInsuranceType; // response.data.data를 반환
  } catch (error) {
    console.log("펫 보험 상세 조회하기 에러", error);
    return undefined; // 에러 발생 시 undefined 반환
  }
};
