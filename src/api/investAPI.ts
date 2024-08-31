import axios, { isAxiosError } from "axios";
import { BASE_URL } from "./APIconfig";

interface SavingsGoal {
  targetId: number;
  description: string;
  targetAmount: number;
  targetTitle: string;
  currentAmount: number;
  isDone: boolean;
  startDate: string;
  endDate: string;
  accountId: number;
}

interface GetSavingsGoalListResponse {
  status: number;
  message: string;
  data: SavingsGoal[];
}

interface SavingsGoalRequest {
  targetTitle: string;
  targetAmount: number;
  startDate: string;
  endDate: string;
}

interface GoalHistoryDetail {
  detailId: number;
  amount: number;
  createdDate: string;
}

interface GetGoalHistoryResponse {
  status: number;
  message: string;
  data: GoalHistoryDetail[];
}

interface AchievedTarget {
  targetTitle: string;
  targetAmount: number;
  completedDate: string;
}

interface AllSummaryData {
  averageDepositsPerTarget: number;
  averageAmountPerDeposit: number;
  achievedTargetsCount: number;
  achievedTargets: AchievedTarget[];
}

// interface GetAllSummaryResponse {
//   status: number;
//   message: string;
//   data: AllSummaryData;
// }

//저축 목표 목록 가져오기
export const getSavingsGoalList = async (
  token: string
): Promise<SavingsGoal[]> => {
  try {
    const response = await axios.get<GetSavingsGoalListResponse>(
      `${BASE_URL}/api/v1/targets`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("저축 목표 리스트 : ", response.data);
    return response.data.data;
  } catch (error) {
    console.log("저축 목표 가져오기 에러 : ", error);
    throw error;
  }
};

//저축 목표 추가하기
export const addSavingsGoal = async (
  data: SavingsGoalRequest,
  token: string
) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/targets`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("저축 목표 추가하기 에러 : ", error);
    throw error;
  }
};

//저축 목표에 대한 저축내역 가져오기
export const getGoalHistory = async (
  targetId: number,
  token: string
): Promise<GetGoalHistoryResponse> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/targets/detail?targetId=${targetId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("목표 저축내역 가져오기 에러 : ", error);
    throw error;
  }
};

//저축 목표 삭제하기(금융)
export const deleteGoal = async (targetId: number, token: string) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/v1/targets/${targetId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.status);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//전체 목표 요약 정보 가져오기
export const getAllSummary = async (token: string): Promise<AllSummaryData> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/targets/summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("전체 목표 요약 정보 가져오기 에러 : ", error);
    throw error;
  }
};

//저축 목표에 입금하기(금융)
export const depositGoal = async ({
  targetId,
  amount,
  token,
}: {
  targetId: number;
  amount: number;
  token: string;
}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/targets/${targetId}`,
      { amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("저축 목표에 입금하기 에러 : ", error);
    throw error;
  }
};

export const checkAccount = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/accounts/inquire`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.data.data == null) {
      console.log("에러는 발생하지만 넘어가기");
      return null;
    }
    console.log("저축 목표에 입금하기 에러 : ", error);
    throw error;
  }
};

interface createRequest {
  accountTitle: string;
  accountTypeUniqueNo: string;
}

export const createAccount = async (request: createRequest, token: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/accounts/create`,
      {
        accountTitle: request.accountTitle,
        accountTypeUniqueNo: request.accountTypeUniqueNo,
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
    console.log("저축 계좌 생성 에러 : ", error);
    throw error;
  }
};

interface updateRequest {
  accountImage: string;
  accountColor: string;
}

export const updateAccount = async (request: updateRequest, token: string) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/api/v1/accounts/create-color`,
      {
        accountImage: request.accountImage,
        accountColor: request.accountColor,
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
    console.log("저축 계좌 업데이트 에러 : ", error);
    throw error;
  }
};

export const updateColor = async (newColor: string, token: string) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/api/v1/accounts/update-color`,
      {
        newColor,
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
    console.log("색상 업데이트 에러 : ", error);
    throw error;
  }
};

//완료된 저축 목표 출금하기(금융)
export const withdrawGoal = async (token: string, targetId: number) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/api/v1/targets/${targetId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.status);
    return response.data.status;
  } catch (error) {
    console.log("완료 목표 출금하기 에러 : ", error);
  }
};
