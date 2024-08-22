import { useState } from "react";
import chevronDown from "../../assets/icons/chevronDown.png";
import chevronUp from "../../assets/icons/chevronUp.png";
import { useNavigate } from "react-router-dom";

const GoalCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full p-4 bg-gray-50 rounded-lg border-2 border-solid border-gray-200 my-2">
      {/* 목표치 */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[14px] font-semibold">
            여름에 강아지 펜션 놀러가기
          </h1>
          <h1 className="text-[12px] text-gray-500 font-semibold">
            2024.04.12 ~ 2024.05.12
          </h1>
          <span className="text-[14px] font-semibold">50000원 </span>
          <span className="text-[14px] font-semibold text-gray-400">
            / 200,000원
          </span>
        </div>
        <button
          onClick={() => {
            navigate("/invest/deposit");
          }}
          className="bg-blue-100 flex items-center justify-center py-2 px-4 rounded-[99px] text-gray-0 text-[14px] h-auto"
        >
          입금하기
        </button>
      </div>
      {/* progress bar */}
      <div className="w-full h-2 bg-gray-200 my-3 rounded-full relative">
        <div className="h-full bg-blue-100 rounded-full absolute left-0 w-[100px]"></div>
      </div>
      <hr className="my-4" />
      {/* 저축 내역 보기 */}
      <div>
        {isOpen ? (
          <div className="flex items-center justify-center flex-col transition-all duration-300">
            {/* 각 입금 내역 */}
            <div className="mb-4 w-full flex gap-7">
              <span className="font-semibold text-[14px] text-gray-500">
                2024.07.06
              </span>
              <span className="font-semibold text-[14px]">25,000원</span>
            </div>
            <div className="mb-4 w-full flex gap-7">
              <span className="font-semibold text-[14px] text-gray-500">
                2024.07.06
              </span>
              <span className="font-semibold text-[14px] ">25,000원</span>
            </div>

            <div
              className="flex  cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span className="text-gray-500 font-semibold text-[12px] mr-1">
                저축 내역 닫기
              </span>
              <img src={chevronUp} className="w-4" />
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-center cursor-pointer transition-all duration-300"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span className="text-gray-500 font-semibold text-[12px] mr-1">
              저축 내역 보기
            </span>
            <img src={chevronDown} className="w-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalCard;
