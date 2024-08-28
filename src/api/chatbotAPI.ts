import axios from "axios";
import { BASE_URL } from "./APIconfig";
// import { BASE_URL, accessToken } from "./APIconfig";

const accessToken = localStorage.getItem("accessToken");

//챗봇 메시지 전송 및 답장하기
export const getReply = async (chat: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/chatbots`,
      { chat },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.data?.chat);
    return response?.data.data.chat;
  } catch (error) {
    console.log("메시지 전송 및 답장하기 오류 : ", error);
  }
};

//챗봇 세션 입장하기
export const enterChat = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/chatbots/session`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log("입장 성공");
  } catch (error) {
    console.log("챗봇 입장 에러 : ", error);
  }
};
