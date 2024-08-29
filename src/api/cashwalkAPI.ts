import axios from "axios";
import { BASE_URL } from "./APIconfig";

//일지 등록하기
export const writeDiary = async (
  token: string,
  content: string,
  createdAt: string
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/cashwalks`,
      {
        content,
        createdAt,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("일지 작성 성공!");
  } catch (error) {
    console.log("일지 작성 오류 : ", error);
  }
};
//이번달 작성한 일지 조회하기
export const getMonthDiary = async (token: string, date: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/cashwalks/month?date=${date}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("이번 달 일지 리스트 : ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("", error);
  }
};
