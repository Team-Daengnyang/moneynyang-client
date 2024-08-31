import { TopBar } from "../../components/Topbar";
import moneyBag from "../../assets/images/money bag.png";
import chevronRight from "../../assets/icons/chevronRight.png";

import paw from "../../assets/icons/gray paw.png";
import GoalCard from "../../components/Card/GoalCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSavingsGoalList } from "../../api/investAPI";
import useUserStore from "../../store/UseUserStore";

const InvestPet = () => {
  const navigate = useNavigate();
  const { token, petInfo, userInfo } = useUserStore((state) => ({
    token: state.token,
    petInfo: state.petInfo,
    userInfo: state.userInfo,
  }));

  console.log(petInfo);

  const { data: SavingGoalList } = useQuery("goalsList", () =>
    getSavingsGoalList(token)
  );

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 overflow-auto">
      <TopBar pre={"/"} title={"우리 아이 덕질하기"} skip={""} />
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
            <span className="font-semibold text-blue-100 text-sm	">
              {petInfo.petName}
            </span>
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
            <h1 className="text-blue-100 text-sm mb-1	font-semibold">
              {petInfo.petName}
            </h1>
            <span className="font-bold text-base	">오늘 나의 저축 목표 </span>{" "}
            <span className="text-blue-100 font-bold text-base">
              {SavingGoalList?.length}
            </span>
            <span className="font-bold text-base">개</span>
            <div className="flex gap-1 items-center">
              <img src={paw} style={{ width: "12px", height: "12px" }} />
              <h4 className="text-gray-500 mt-1 text-xs">
                {userInfo.memberDate}일째 덕질 중
              </h4>
            </div>
          </div>
        </div>
        <img
          src={petInfo.petImage}
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

      {!SavingGoalList && (
        <div className="w-full h-[440px] flex justify-center itmes-center flex-col">
          <h1 className="mb-5 text-3 text-gray-300 font-semibold">
            현재 저축 목표가 없습니다
          </h1>
          <h1 className="text-4 text-gray-300 font-semibold">
            저축 목표를 추가해보세요
          </h1>
        </div>
      )}

      {SavingGoalList?.map((data, i) => {
        return (
          <GoalCard
            key={i}
            title={data.targetTitle}
            from={data.startDate}
            to={data.endDate}
            currentMoney={data.currentAmount}
            goalMoney={data.targetAmount}
            // depositDatas={data.depositDatas}
            targetId={data.targetId}
            isDone={data.isDone}
          />
        );
      })}
    </div>
  );
};

export default InvestPet;
