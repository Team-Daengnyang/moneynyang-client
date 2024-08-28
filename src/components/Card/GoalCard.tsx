import { useState } from "react";
import chevronDown from "../../assets/icons/chevronDown.png";
import chevronUp from "../../assets/icons/chevronUp.png";
import { useNavigate } from "react-router-dom";
import trash from "../../assets/icons/trash.png";
import { getGoalHistory } from "../../api/investAPI";
import { useQuery } from "react-query";

export interface IGoalCard {
  title: string;
  from: string;
  to: string;
  currentMoney: number;
  goalMoney: number;
  // depositDatas: depositData[];
  targetId: number;
}

type depositData = {
  date: string;
  amount: number;
};

const GoalCard = ({
  title,
  from,
  to,
  currentMoney,
  goalMoney,
  // depositDatas,
  targetId,
}: IGoalCard) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);

  const { data: depositDatas } = useQuery(["depositDatas", targetId], () =>
    getGoalHistory(targetId)
  );

  const navigate = useNavigate();

  const progressPercent = Math.min((currentMoney / goalMoney) * 100, 100);

  return (
    <div className="relative">
      {/* 목표 */}
      <div
        onMouseDown={(e) => {
          setIsClicked(true);
          // console.log("클릭 시작 위치 : ", e.clientX);
          setStartX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (isClicked) {
            // console.log("이동한 거리 : ", e.clientX - startX);
            if (e.clientX - startX < -30) {
              setMoveX(-80);
            } else {
              setMoveX(0);
            }
          }
        }}
        onMouseUp={() => {
          setIsClicked(false);
          // console.log("마지막 위치 : ");
        }}
        style={{
          transform: `translateX(${moveX}px)`,
          transition: "transform 0.3s ease",
        }}
        className="relative z-10 w-full p-4 bg-gray-50 rounded-lg border-2 border-solid border-gray-200 my-2"
      >
        {/* 목표치 */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[14px] font-semibold">{title}</h1>
            <h1 className="text-[12px] text-gray-500 font-semibold">
              {from} ~ {to}
            </h1>
            <span className="text-[14px] font-semibold">{currentMoney}원 </span>
            <span className="text-[14px] font-semibold text-gray-400">
              / {goalMoney}원
            </span>
          </div>
          <button
            onClick={() => {
              navigate("/invest/deposit", {
                state: {
                  title: title,
                },
              });
            }}
            className="bg-blue-100 flex items-center justify-center py-2 px-4 rounded-[99px] text-gray-0 text-[14px] h-auto"
          >
            입금하기
          </button>
        </div>
        {/* progress bar */}
        <div className="w-full h-2 bg-gray-200 my-3 rounded-full relative">
          <div
            className="h-full bg-blue-100 rounded-full absolute left-0"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <hr className="my-4" />
        {/* 저축 내역 보기 */}
        <div>
          <div
            className={`flex flex-col items-center justify-center transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            {/* 각 입금 내역 */}
            {depositDatas?.data.map((data, i: number) => (
              <div className="mb-4 w-full flex gap-7" key={i}>
                <span className="font-semibold text-[14px] text-gray-500">
                  {data.createdDate}
                </span>
                <span className="font-semibold text-[14px]">
                  {data.amount}원
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span className="text-gray-500 font-semibold text-[12px] mr-1">
              {isOpen ? "저축 내역 닫기" : "저축 내역 보기"}
            </span>
            <img src={isOpen ? chevronUp : chevronDown} className="w-4" />
          </div>
        </div>
      </div>
      {/* 삭제 */}
      <div
        className="absolute right-0 top-0 w-[72px] h-[168px] rounded-md flex items-center justify-center gap-1 flex-col  cursor-pointer z-[1]"
        style={{ backgroundColor: "#FF6E6E" }}
      >
        <img src={trash} className="w-[24px]" />
        <h1 className="text-gray-0 text-[14px]">삭제</h1>
      </div>
    </div>
  );
};

export default GoalCard;
