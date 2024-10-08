import React, { useState } from "react";
import { TopBar } from "../../components/Topbar";
import { useNavigate } from "react-router-dom";
import { addSavingsGoal } from "../../api/investAPI";
import useUserStore from "../../store/UseUserStore";
import { Button } from "../../components/Button";
import { useMutation, useQueryClient } from "react-query";

const SavingsGoal = () => {
  const [startDate, setTargetStartDate] = useState("");
  const [endDate, setTargetEndDate] = useState("");
  const [targetTitle, setTargetTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const token = useUserStore((state) => state.token);

  const mutation = useMutation(
    () =>
      addSavingsGoal({ targetTitle, targetAmount, startDate, endDate }, token),
    {
      onSuccess: () => {
        console.log("목표 생성 성공!");
        queryClient.invalidateQueries("goalsList");
      },
      onError: () => {
        console.log("목표 생성 실패ㅠㅠ");
      },
    }
  );

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const handleDateInput = (
    value: string,
    setDate: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    const numericValue = value.replace(/\D/g, "");
    let formattedValue = numericValue;
    if (numericValue.length > 4) {
      formattedValue = `${numericValue.slice(0, 4)}-${numericValue.slice(4)}`;
    }
    if (numericValue.length > 6) {
      formattedValue = `${numericValue.slice(0, 4)}-${numericValue.slice(
        4,
        6
      )}-${numericValue.slice(6)}`;
    }
    setDate(formattedValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end <= start) {
      setErrorMessage("종료 날짜는 시작 날짜보다 커야 합니다.");
      return;
    }

    setErrorMessage("");
    // addSavingsGoal({ targetTitle, targetAmount, startDate, endDate }, token);
    mutation.mutate();
    // queryClient.invalidateQueries("goalsList");
    navigate("/invest");
  };

  return (
    <div className="h-full w-full pt-6 px-4 bg-gray-0 flex flex-col">
      <TopBar pre={"/invest"} title={""} skip={""} />
      {/* 헤딩 */}
      <h1 className="text-gray-700 text-[20px] font-semibold mb-5">
        저축 목표와 금액을 <br />
        적어주세요
      </h1>
      <form
        className="flex flex-col justify-between flex-grow"
        onSubmit={handleSubmit}
      >
        <div className="space-y-5">
          <div>
            <div className="flex mb-2">
              <h1 className="text-[14px] font-semibold">목표</h1>
              <h1 className="text-blue-100 text-[14px]">*</h1>
            </div>
            <input
              required
              value={targetTitle}
              onChange={(e) => setTargetTitle(e.target.value)}
              placeholder="어떤 목표인가요?"
              type="text"
              className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[14px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none"
            />
          </div>
          <div>
            <div className="flex mb-2">
              <h1 className="text-[14px] font-semibold">금액</h1>
              <h1 className="text-blue-100 text-[14px]">*</h1>
            </div>
            <div className="flex items-center">
              <input
                onChange={(event) => {
                  setTargetAmount(Number(event.target.value));
                }}
                required
                type="number"
                placeholder="얼마나 모을까요?"
                className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[14px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none"
              />
              <span className="text-gray-500 text-[14px] ml-2 font-semibold">
                원
              </span>
            </div>
          </div>
          <div>
            <div className="flex mb-2">
              <h1 className="text-[14px] font-semibold">기간</h1>
              <h1 className="text-blue-100 text-[14px]">*</h1>
            </div>
            <div className="flex items-center">
              <input
                type="date"
                value={startDate}
                onChange={(e) =>
                  handleDateInput(e.target.value, setTargetStartDate)
                }
                required
                placeholder="YYYY-MM-DD"
                maxLength={10}
                className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[14px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none"
              />
              <span className="mx-3 text-gray-300">-</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) =>
                  handleDateInput(e.target.value, setTargetEndDate)
                }
                placeholder="YYYY-MM-DD"
                maxLength={10}
                className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[14px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none"
              />
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>
        <Button text="추가하기" onClick={() => {}} />
      </form>
    </div>
  );
};

export default SavingsGoal;
