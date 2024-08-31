import { useState } from "react";
import chevronDown from "../../assets/icons/chevronDown.png";
import chevronUp from "../../assets/icons/chevronUp.png";
import { useNavigate } from "react-router-dom";
import trash from "../../assets/icons/trash.png";
import { deleteGoal, getGoalHistory, withdrawGoal } from "../../api/investAPI";
import { useQuery } from "react-query";
import { useMutation, useQueryClient } from "react-query";
import useUserStore from "../../store/UseUserStore";
import blueCheck from "../../assets/icons/blueCheck.png";

export interface IGoalCard {
  title: string;
  from: string;
  to: string;
  currentMoney: number;
  goalMoney: number;
  targetId: number;
  isDone: boolean;
}

const GoalCard = ({
  title,
  from,
  to,
  currentMoney,
  goalMoney,
  targetId,
  isDone,
}: IGoalCard) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const token = useUserStore((state) => state.token);
  const queryClient = useQueryClient();

  const mutation = useMutation(() => deleteGoal(targetId, token), {
    onSuccess: () => {
      console.log(` ${targetId}번 목표 삭제 성공`);
      queryClient.invalidateQueries("goalsList");
    },
    onError: () => {
      console.log("삭제 중 에러 발생");
    },
    retryDelay: 1000,
  });

  const mutation2 = useMutation(() => withdrawGoal(token, targetId), {
    onSuccess: () => {
      console.log(`성공 목표 출금 완료요~~`);
      queryClient.invalidateQueries("goalsList");
    },
    onError: () => {
      console.log("출금 중 에러 발생");
    },
    retryDelay: 1000,
  });

  const { data: depositDatas } = useQuery(["depositDatas", targetId], () =>
    getGoalHistory(targetId, token)
  );

  const navigate = useNavigate();
  const progressPercent = Math.min((currentMoney / goalMoney) * 100, 100);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsClicked(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isClicked) {
      if (e.touches[0].clientX - startX < -30) {
        setMoveX(-80);
      } else {
        setMoveX(0);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsClicked(false);
  };

  return (
    <div className="relative">
      <div
        onMouseDown={(e) => {
          setIsClicked(true);
          setStartX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (isClicked) {
            if (e.clientX - startX < -30) {
              setMoveX(-80);
            } else {
              setMoveX(0);
            }
          }
        }}
        onMouseUp={() => {
          setIsClicked(false);
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(${moveX}px)`,
          transition: "transform 0.3s ease",
        }}
        className="relative z-10 p-4 bg-gray-50 rounded-lg border-2 border-solid border-gray-200 my-2"
      >
        <div className="flex justify-between items-center space-x-5">
          <div className="w-full">
            <h1 className="text-[14px] font-semibold">{title}</h1>
            <h1 className="text-[12px] text-gray-500 font-semibold">
              {from} ~ {to}
            </h1>
            <span className="text-[14px] font-semibold">{currentMoney}원 </span>
            <span className="text-[14px] font-semibold text-gray-400">
              / {goalMoney}원
            </span>
          </div>
          {!isDone ? (
            <button
              onClick={() => {
                navigate("/invest/deposit", {
                  state: {
                    title: title,
                    targetId,
                  },
                });
              }}
              className="bg-blue-100 flex items-center justify-center py-2 px-4 rounded-[99px] text-gray-0 text-[14px] h-[36px] w-[110px]"
            >
              입금하기
            </button>
          ) : (
            <button
              onClick={async () => {
                mutation2.mutate();
              }}
              className="bg-blue-100 flex items-center justify-center py-2 px-4 rounded-[99px] text-gray-0 text-[14px] h-[36px] w-[110px]"
            >
              출금하기
            </button>
          )}
        </div>

        <div className="w-full h-2 bg-gray-200 my-3 rounded-full relative">
          <div
            className="h-full bg-blue-100 rounded-full absolute left-0"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <hr className="my-4" />
        <div>
          <div
            className={`flex flex-col items-center justify-center transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
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

      {!isDone ? (
        <div
          onClick={() => {
            mutation.mutate();
          }}
          className="absolute right-0 top-0 w-[72px] h-[168px] rounded-md flex items-center justify-center gap-1 flex-col  cursor-pointer z-[1]"
          style={{ backgroundColor: "#FF6E6E" }}
        >
          <img src={trash} className="w-[24px]" />
          <h1 className="text-gray-0 text-[14px]">삭제</h1>
        </div>
      ) : (
        <div
          className="absolute right-0 top-0 w-[72px] h-[168px] rounded-md flex items-center justify-center gap-1 flex-col  cursor-pointer z-[1]"
          style={{ backgroundColor: "#005EED" }}
        >
          <img src={blueCheck} className="w-[24px]" />
          <h1 className="text-gray-0 text-[14px]">달성</h1>
        </div>
      )}
    </div>
  );
};

export default GoalCard;
