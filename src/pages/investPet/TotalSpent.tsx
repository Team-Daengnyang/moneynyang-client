import { TopBar } from "../../components/Topbar";
import target from "../../assets/icons/Target.png";
import moneyBag from "../../assets/icons/money bag.png";
import blueCheck from "../../assets/icons/blueCheck.png";
import FinishedGoalCard from "../../components/Card/FinishedGoalCard";
import { getAllSummary } from "../../api/investAPI";
import { useQuery } from "react-query";
import useUserStore from "../../store/UseUserStore";

const TotalSpent = () => {
  const { petInfo, token } = useUserStore((state) => ({
    petInfo: state.petInfo,
    token: state.token,
  }));
  const { data: summaryDatas } = useQuery("summaryDatas", () =>
    getAllSummary(token)
  );

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 overflow-y-auto overflow-x-hidden">
      <TopBar pre={"/"} title={""} skip={""} />

      <div className="mb-5">
        <span className="text-gray-700 text-[20px] font-semibold">
          지금까지 나는 <br />
        </span>
        <span className="text-blue-100 text-[20px] font-semibold">
          {petInfo.petName}
        </span>
        <span className="text-gray-700 text-[20px] font-semibold">
          에게 얼마나 썼을까?
        </span>
      </div>

      <div>
        <div className="mb-[32px]">
          <div className="flex items-center gap-1 mb-[7px]">
            <img className="w-[18px]" src={target} />{" "}
            <span className="text-[16px] font-semibold">
              평균적인 목표 달성 횟수
            </span>
          </div>
          <div className="mb-2 w-full h-[48px] flex items-center justify-center bg-gray-100 rounded-md border-[1px] border-gray-200">
            <h1 className="text-[14px] font-medium">평균 &nbsp;</h1>
            <h1 className="text-[14px] font-bold">
              {summaryDatas?.averageDepositsPerTarget}번
            </h1>
            <h1 className="text-[14px] font-medium">
              의 입금으로 목표를 달성했어요!
            </h1>
          </div>
        </div>
        <div className="mb-[32px]">
          <div className="flex items-center gap-1 mb-[7px]">
            <img className="w-[18px]" src={moneyBag} />{" "}
            <span className="text-[16px] font-semibold">
              평균적인 목표 달성 횟수
            </span>
          </div>
          <div className="mb-2 w-full h-[48px] flex items-center justify-center bg-gray-100 rounded-md border-[1px] border-gray-200">
            <h1 className="text-[14px] font-medium">평균 &nbsp;</h1>
            <h1 className="text-[14px] font-bold">
              {summaryDatas?.averageAmountPerDeposit}원
            </h1>
            <h1 className="text-[14px] font-medium">을 입금했어요!</h1>
          </div>
        </div>
        <div className="mb-[32px]">
          <div className="flex items-center gap-1 mb-[7px]">
            <img className="w-[18px]" src={blueCheck} />{" "}
            <span className="text-[16px] font-semibold">
              평균적인 목표 달성 횟수
            </span>
          </div>
          <div className="mb-2 w-full h-[48px] flex items-center justify-center bg-gray-100 rounded-md border-[1px] border-gray-200">
            <h1 className="text-[14px] font-medium">총 &nbsp;</h1>
            <h1 className="text-[14px] font-bold">
              {summaryDatas?.achievedTargetsCount}개
            </h1>
            <h1 className="text-[14px] font-medium">를 달성했어요!</h1>
          </div>
          {summaryDatas?.achievedTargets?.map((data, i) => {
            return (
              <FinishedGoalCard
                key={i}
                title={data.targetTitle}
                date={data.completedDate}
                goalAmount={data.targetAmount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TotalSpent;
