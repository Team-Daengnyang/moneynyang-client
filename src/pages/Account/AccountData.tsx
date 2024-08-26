import { TopBar } from "../../components/Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart } from "./Chart";

export const AccountData = () => {
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
    <div className="h-full pt-6 px-4 bg-gray-0 overflow-y-auto">
      <TopBar title={""} skip={""} />
      <div className="space-y-5">
        {/* 월 선택 */}
        <div className="flex space-x-3 place-items-center">
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
        {/* 분석 */}
        <div className="mb-5">
          <p className="font-semibold text-[26px]">398,227원</p>
        </div>
        <div className="border rounded-md p-3 text-sm text-gray-600">
          <p>
            <span className="text-main-color">반려</span>에 가장 많이 썼어요
          </p>
          <p>
            지난달보다 <span className="text-main-color">8만원 덜</span> 쓰는
            중이에요
          </p>
        </div>
        {/* 차트 */}
        <div className="space-y-5">
          <Chart />
          {/*  */}
          <div className="space-y-3 px-3">
            <div className="flex justify-between place-items-center">
              <div className="flex space-x-5 place-items-center">
                <div className="rounded-full bg-main-color w-3 h-3"></div>
                <div>
                  <p className="font-semibold">반려</p>
                  <p className="font-medium text-gray-500">46.0%</p>
                </div>
              </div>
              <p className="font-semibold">228,445원</p>
            </div>
            {/*  */}
            <div className="flex justify-between place-items-center">
              <div className="flex space-x-5 place-items-center">
                <div className="rounded-full bg-[#5CC185] w-3 h-3"></div>
                <div>
                  <p className="font-semibold">저시기</p>
                  <p className="font-medium text-gray-500">21.1%</p>
                </div>
              </div>
              <p className="font-semibold">228,445원</p>
            </div>
            {/*  */}
            <div className="flex justify-between place-items-center">
              <div className="flex space-x-5 place-items-center">
                <div className="rounded-full bg-[#F8D36B] w-3 h-3"></div>
                <div>
                  <p className="font-semibold">머시기</p>
                  <p className="font-medium text-gray-500">11.2%</p>
                </div>
              </div>
              <p className="font-semibold">228,445원</p>
            </div>
            {/*  */}
            <div className="flex justify-between place-items-center">
              <div className="flex space-x-5 place-items-center">
                <div className="rounded-full bg-[#E3E5E7] w-3 h-3"></div>
                <div>
                  <p className="font-semibold">기타</p>
                  <p className="font-medium text-gray-500">21.3%</p>
                </div>
              </div>
              <p className="font-semibold">228,445원</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" bg-gray-100 h-2 w-full" />
        {/* 계좌 데이터 */}
        <div className="space-y-3">
          <p className="font-semibold">계좌 데이터</p>
          <div className="bg-gray-100 border rounded-md flex px-5 py-3 justify-between font-medium">
            <p className="text-gray-500">총 소비</p>
            <p>300.000원</p>
          </div>
          <div className="bg-gray-100 border rounded-md flex px-5 py-3 justify-between font-medium">
            <p className="text-gray-500">반려 덕질 비용</p>
            <p>30.000원</p>
          </div>
          <div className="bg-gray-100 border rounded-md flex px-5 py-3 justify-between font-medium">
            <p className="text-gray-500">반려 덕질 결제 횟수</p>
            <p>7번</p>
          </div>
        </div>
      </div>
    </div>
  );
};
