import { TopBar } from "../../components/Topbar";
import pawCalendar from "../../assets/images/pawCalendar.png";
import chevronRight from "../../assets/icons/chevronRight.png";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/UseUserStore";
import { useEffect, useState } from "react";
import { getUserStats } from "../../api/cashwalkAPI";
import { useQuery } from "react-query";

const CashWalk = () => {
  const navigate = useNavigate();
  const { petInfo, token } = useUserStore((state) => ({
    petInfo: state.petInfo,
    token: state.token,
  }));

  const { data } = useQuery("userStats", () => getUserStats(token));

  const [headerText, setHeaderText] = useState("");
  const [typeText, setTypeText] = useState("");

  useEffect(() => {
    if (petInfo.petType == "강아지") {
      setHeaderText("산책일지 기록");
      setTypeText("산책");
    } else {
      setHeaderText("관찰일지 기록");
      setTypeText("관찰");
    }
  }, []);

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 ">
      <TopBar pre={"/"} skip={""} title={headerText} />
      <div className="h-[314px] bg-gray-100 rounded-md   p-4 border-gray-200 border-[1px] relative">
        <div>
          <h1 className="text-[12px] font-medium text-gray-500">
            반려동물과 함께한
          </h1>
          <h1 className="text-[18px] font-medium">{petInfo.petName}의 일지</h1>
          <span className="text-[36px] font-medium mr-1">
            {data.totalDiaries}
          </span>
          <span className="text-[18px] font-semibold text-gray-400">
            개의 기록
          </span>
        </div>

        <div className=" left-4 bottom-4 flex items-center min-w-full absolute">
          <img
            src={petInfo.petImage}
            alt=""
            className="w-[108px] h-[108px] rounded-full object-cover mr-[119px]"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="px-2 py-1 bg-black text-gray-0 text-[12px] flex justify-center items-center rounded-2xl">
              {data.achievementRate}%
            </div>
            <div
              className="bg-blue-100 rounded-lg w-[45px]"
              style={{ height: `${data.achievementRate * 4}px` }}
            ></div>
            <h1>작성률</h1>
          </div>
        </div>
      </div>
      {/* <h1 className="my-2 text-[12px] font-medium text-gray-400">
        만 걸음을 채워서 100%를 완성해 보세요
      </h1> */}
      <div
        onClick={() => {
          navigate("/cashwalk/calendar");
        }}
        className="bg-gray-0  py-4 px-3 rounded-lg border border-gray-200 flex items-center cursor-pointer justify-between mt-5"
      >
        <div className="flex items-center">
          <img src={pawCalendar} className="w-[42px] mr-2" />
          <div className="flex flex-col">
            <span className="font-semibold text-[16px] text-blue-100">
              {typeText} 일지 확인하기
            </span>
            <span className="font-medium text-[14px] text-gray-500">
              {typeText}을 기록할 수 있어요
            </span>
          </div>
        </div>
        <img src={chevronRight} className="w-[18px]" />
      </div>
    </div>
  );
};

export default CashWalk;
