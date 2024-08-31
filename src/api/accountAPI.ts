import axios from "axios";
import { BASE_URL } from "./APIconfig";

export const getDataDetail = async (yearMonth: string, token: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/member-detail`,
      {
        yearMonth,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log("계좌 상세 데이터 에러 : ", error);
    throw error;
  }
};
