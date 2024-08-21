import { TopBar } from "../../components/Topbar";
import moneyBag from "../../assets/images/money bag.png";
import chevronRight from "../../assets/icons/chevronRight.png";
import sampleDog from "../../assets/images/sampleDog.png";
import paw from "../../assets/icons/gray paw.png";
import GoalCard from "../../components/Card/GoalCard";

const InvestPet = () => {
  return (
    <div className="h-full pt-6 px-4 bg-gray-0 ">
      <TopBar title={"우리 아이 덕질하기"} skip={""} />
      {/*  */}
      <div className="w-full h-[80px] bg-main flex justify-between items-center rounded-lg border-2 border-gray-200 py-4 px-3 box-border	cursor-pointer">
        <div className="flex gap-2 justify-center items-center ">
          <img className="w-[40px] h-[40px]" src={moneyBag} />
          <div>
            <span className="font-semibold text-sm		">지금까지 나는</span>
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
      <div className="w-full h-[40px] bg-blue-000 flex justify-center items-center font-semibold text-blue-100 text-[14px] rounded-md cursor-pointer my-[14px]">
        저축 목표 추가하기
      </div>
      {/*  */}
      <GoalCard />
      <GoalCard />
    </div>
  );
};

export default InvestPet;
