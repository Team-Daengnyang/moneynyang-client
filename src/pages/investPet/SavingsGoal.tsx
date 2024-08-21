import { useState } from "react";
import { TopBar } from "../../components/Topbar";
import star from "../../assets/icons/star.png";

const SavingsGoal = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateInput = (
    value: string,
    setDate: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    // 숫자만 남기기
    const numericValue = value.replace(/\D/g, "");

    // YYYY.MM.DD 형식으로 포맷팅
    let formattedValue = numericValue;
    if (numericValue.length > 4) {
      formattedValue = `${numericValue.slice(0, 4)}.${numericValue.slice(4)}`;
    }
    if (numericValue.length > 6) {
      formattedValue = `${numericValue.slice(0, 4)}.${numericValue.slice(
        4,
        6
      )}.${numericValue.slice(6)}`;
    }

    // 값 업데이트
    setDate(formattedValue);
  };

  return (
    <div className="h-full w-full pt-6 px-4 bg-gray-0">
      <TopBar title={""} skip={""} />
      {/* 헤딩 */}
      <h1 className="text-gray-700 text-[20px] font-semibold mb-5">
        저축 목표와 금액을 <br />
        적어주세요
      </h1>
      <div>
        <form>
          <div>
            <div className="flex mb-2">
              <h1 className="text-[14px] font-semibold">목표</h1>
              <h1 className="text-blue-100 text-[14px]">*</h1>
            </div>
            <input
              placeholder="어떤 목표인가요?"
              type="text"
              className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[14px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none mb-5"
            />
          </div>
          <div>
            <div className="flex mb-2">
              <h1 className="text-[14px] font-semibold">금액</h1>
              <h1 className="text-blue-100 text-[14px]">*</h1>
            </div>
            <div className="pb-6 flex items-center">
              <input
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
                type="text"
                value={startDate}
                onChange={(e) => handleDateInput(e.target.value, setStartDate)}
                placeholder="YYYY.MM.DD"
                maxLength={10}
                className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[14px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none"
              />
              <span className="mx-3 text-gray-300">-</span>
              <input
                type="text"
                value={endDate}
                onChange={(e) => handleDateInput(e.target.value, setEndDate)}
                placeholder="YYYY.MM.DD"
                maxLength={10}
                className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[14px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[320px] h-[56px] rounded-[12px] bg-blue-100 text-gray-0 absolute bottom-6 left-1/2 transform -translate-x-1/2"
          >
            추가하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SavingsGoal;
