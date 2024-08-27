import axios from "axios";
import BASE_URL from "./apiconfig";

const accessToken = localStorage.getItem("accessToken");

interface SavingsGoal {
  targetId: number;
  description: string;
  targetAmount: number;
  targetTitle: string;
  currentAmount: number;
  isDone: boolean;
  targetStartDate: string;
  targetEndDate: string;
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
  targetStartDate: string;
  targetEndDate: string;
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

interface GetAllSummaryResponse {
  status: number;
  message: string;
  data: AllSummaryData;
}

//저축 목표 가져오기
export const getSavingsGoalList =
  async (): Promise<GetSavingsGoalListResponse> => {
    try {
      const response = await axios.get<GetSavingsGoalListResponse>(
        `${BASE_URL}/api/v1/targets`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("저축 목표 가져오기 에러 : ", error);
      throw error;
    }
  };

//저축 목표 추가하기
export const addSavingsGoal = async ({
  targetTitle,
  targetAmount,
  targetStartDate,
  targetEndDate,
}: SavingsGoalRequest) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/targets`,
      {
        targetTitle,
        targetAmount,
        targetStartDate,
        targetEndDate,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("저축 목표 추가하기 에러 : ", error);
    throw error;
  }
};

//저축 목표에 대한 저축내역 가져오기
export const getGoalHistory = async (
  targetId: number
): Promise<GetGoalHistoryResponse> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/targets/detail?targetId=${targetId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
export const deleteGoal = async ({ targetId }: { targetId: string }) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/v1/targets/${targetId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//전체 목표 요약 정보 가져오기
export const getAllSummary = async (): Promise<GetAllSummaryResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/targets/summary`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("전체 목표 요약 정보 가져오기 에러 : ", error);
    throw error;
  }
};

//저축 목표에 입금하기(금융)
export const depositGoal = async ({
  targetId,
  amount,
}: {
  targetId: string;
  amount: number;
}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/targets/${targetId}`,
      { amount },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("저축 목표에 입금하기 에러 : ", error);
    throw error;
  }
};
