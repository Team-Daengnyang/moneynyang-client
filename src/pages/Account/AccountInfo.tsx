import { TopBar } from "../../components/Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AccountInfo = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const incrementMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const decrementMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" }); // 월 이름을 가져옵니다.

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 ">
      <TopBar title={"거래 내역 조회"} skip={""} />
      <div className="space-y-4">
        {/* 내 계좌 */}
        <div className="mb-5">
          <div className="flex space-x-1 place-items-center mb-1">
            <img src="src/assets/Main/shinhan.png" alt="" className="w-5 h-5" />
            <p className="text-sm text-[#73787E]">신한 12-3456-7899</p>
          </div>
          <p className="font-semibold text-[26px]">398,227원</p>
        </div>
        {/* 버튼 */}
        <div className="flex justify-between w-full space-x-2">
          <div
            className="w-1/2 py-3 text-center rounded-lg font-medium text-sm 
                    bg-[#E8F1FF] text-main-color"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/account/data");
            }}
          >
            <p>계좌상세</p>
          </div>
          <div
            className="w-1/2 py-3 text-center rounded-lg font-medium text-sm 
                    bg-main-color text-white"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/pay");
            }}
          >
            <p>이체</p>
          </div>
        </div>
        {/*  */}
        <div className=" bg-gray-100 h-2 w-full" />
        {/* 월 선택 */}
        <div className="flex place-content-center space-x-3 place-items-center">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-gray-400 text-lg"
            onClick={decrementMonth}
          />
          <p className="font-medium">{`${year}년 ${month}`}</p>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-gray-400 text-lg"
            onClick={incrementMonth}
          />
        </div>
        {/* 거래 내역 리스트 */}
        <div className=" border-b border-gray-100 space-y-3 py-5">
          <p className="font-medium text-gray-500 text-xs">
            2024.08.23 <span className="text-gray-400">15:05:28</span>
          </p>
          <div className="flex justify-between">
            <p className="font-medium text-lg">최승빈</p>
            <div className="text-right space-y-1">
              <p className="text-lg text-main-color font-semibold">+1,500원</p>
              <p className="text-gray-500 font-medium">잔액 394,277원</p>
            </div>
          </div>
        </div>
        <div className=" border-b border-gray-100 space-y-3 py-5">
          <p className="font-medium text-gray-500 text-xs">
            2024.08.23 <span className="text-gray-400">15:05:28</span>
          </p>
          <div className="flex justify-between">
            <p className="font-medium text-lg">최승빈</p>
            <div className="text-right space-y-1">
              <p className="text-lg text-main-color font-semibold">+1,500원</p>
              <p className="text-gray-500 font-medium">잔액 394,277원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
