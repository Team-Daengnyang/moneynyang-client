import { TopBar } from "../../components/Topbar";
import moneyBag from "../../assets/images/money bag.png";
import chevronRight from "../../assets/icons/chevronRight.png";
import sampleDog from "../../assets/images/sampleDog.jpg";
import paw from "../../assets/icons/gray paw.png";
import GoalCard from "../../components/Card/GoalCard";
import { useNavigate } from "react-router-dom";
import { IGoalCard } from "../../components/Card/GoalCard";
import { useEffect } from "react";

import { useQuery } from "react-query";
import { getSavingsGoalList } from "../../api/investAPI";

const InvestPet = () => {
  const navigate = useNavigate();

  const { data: SavingGoalList } = useQuery("goalsList", () =>
    getSavingsGoalList()
  );

  useEffect(() => {
    console.log(SavingGoalList);
  }, [SavingGoalList]);

  useEffect(() => {
    localStorage.setItem(
      "accessToken",
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyS2V5IjoiOGI5NDIxN2EtODc3MS00MzBmLWIwZDAtM2Q1NmI0MDRiN2M3IiwibWVtYmVySWQiOjI4LCJpYXQiOjE3MjQ3Njg2OTEsImV4cCI6MTcyNDg1NTA5MX0.HQTQ9DPKxUdFCJkavPidchgFPvpoSXlozpKr6bjeumQ"
    );
  }, []);

  // const dummyDatas: IGoalCard[] = [
  //   {
  //     title: "여름에 강아지 펜션 놀러가기",
  //     from: "2024.01.12",
  //     to: "2024.07.01",
  //     currentMoney: 110000,
  //     goalMoney: 200000,
  //     depositDatas: [
  //       { date: "2024.02.01", amount: 30000 },
  //       { date: "2024.04.01", amount: 20000 },
  //       { date: "2024.06.15", amount: 10000 },
  //     ],
  //     targetId: 4,
  //   },
  //   {
  //     title: "연말 여행 자금 모으기",
  //     from: "2024.03.01",
  //     to: "2024.12.01",
  //     currentMoney: 150000,
  //     goalMoney: 500000,
  //     depositDatas: [
  //       { date: "2024.05.10", amount: 50000 },
  //       { date: "2024.07.20", amount: 100000 },
  //       { date: "2024.09.15", amount: 150000 },
  //     ],
  //     targetId: 4,
  //   },
  //   {
  //     title: "새 컴퓨터 장만하기",
  //     from: "2024.02.15",
  //     to: "2024.08.15",
  //     currentMoney: 800000,
  //     goalMoney: 1000000,
  //     depositDatas: [
  //       { date: "2024.03.01", amount: 100000 },
  //       { date: "2024.05.15", amount: 150000 },
  //       { date: "2024.07.01", amount: 200000 },
  //     ],
  //     targetId: 4,
  //   },
  // ];

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 overflow-auto">
      <TopBar title={"우리 아이 덕질하기"} skip={""} />
      {/*  */}
      <div
        onClick={() => {
          navigate("/invest/totalSpent");
        }}
        className="w-full h-[80px] bg-main flex justify-between items-center rounded-lg border-2 border-gray-200 py-4 px-3 box-border	cursor-pointer"
      >
        <div className="flex gap-2 justify-center items-center ">
          <img className="w-[40px] h-[40px]" src={moneyBag} />
          <div>
            <span className="font-semibold text-sm">지금까지 나는</span>
            <br />
            <span className="font-semibold text-blue-100 text-sm	">아롱이</span>
            <span className="font-semibold text-sm	">에게 얼마나 썼을까?</span>
          </div>
        </div>
        <img src={chevronRight} className="w-[18px] " />
      </div>
      {/*  */}
      <div className=" bg-gray-100 h-2 w-full my-3" />
      {/*  */}
      <div className="flex justify-between items-center">
        <div>
          <div className="">
            <h1 className="text-blue-100 text-sm mb-1	font-semibold">아롱이</h1>
            <span className="font-bold text-base	">
              오늘 나의 저축 목표{" "}
            </span>{" "}
            <span className="text-blue-100 font-bold text-base">2</span>
            <span className="font-bold text-base">개</span>
            <div className="flex gap-1 items-center">
              <img src={paw} style={{ width: "12px", height: "12px" }} />
              <h4 className="text-gray-500 mt-1 text-xs">200일째 덕질 중</h4>
            </div>
          </div>
        </div>
        <img
          src={sampleDog}
          className="w-[78px] h-[78px] rounded-full object-cover"
        />
      </div>
      {/*  */}
      <div
        onClick={() => {
          navigate("/invest/savingsGoal");
        }}
        className="w-full h-[40px] bg-blue-000 flex justify-center items-center font-semibold text-blue-100 text-[14px] rounded-md cursor-pointer my-[14px]"
      >
        저축 목표 추가하기
      </div>

      {/* {dummyDatas.map((data, i) => {
        return (
          <GoalCard
            key={i}
            title={data.title}
            from={data.from}
            to={data.to}
            currentMoney={data.currentMoney}
            goalMoney={data.goalMoney}
            depositDatas={data.depositDatas}
            targetId={data.targetId}
          />
        );
      })} */}
      {SavingGoalList?.map((data, i) => {
        return (
          <GoalCard
            key={i}
            title={data.description}
            from={data.startDate}
            to={data.endDate}
            currentMoney={data.currentAmount}
            goalMoney={data.targetAmount}
            // depositDatas={data.depositDatas}
            targetId={data.targetId}
          />
        );
      })}
    </div>
  );
};

export default InvestPet;
// interface SavingsGoal {
//   targetId: number;
//   description: string;
//   targetAmount: number;
//   targetTitle: string;
//   currentAmount: number;
//   isDone: boolean;
//   targetStartDate: string;
//   targetEndDate: string;
//   accountId: number;
// }
