import { TopBar } from "../../components/Topbar";
import goldCoin from "../../assets/icons/gold coin.png";
import chevronRightWhite from "../../assets/icons/chevronRightWhite.png";
import sampleDog from "../../assets/images/sampleDog.jpg";
import pawCalendar from "../../assets/images/pawCalendar.png";
import chevronRight from "../../assets/icons/chevronRight.png";
import { useNavigate } from "react-router-dom";

const CashWalk = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full pt-6 px-4 bg-gray-0 ">
      <TopBar skip={""} title={"산책 캐시워크"} />
      <div className="h-[314px] bg-gray-100 rounded-md   p-4 border-gray-200 border-[1px] relative">
        <div>
          <h1 className="text-[12px] font-medium text-gray-500">
            반려동물과 함께한
          </h1>
          <h1 className="text-[18px] font-medium">오늘의 걸음 수</h1>
          <span className="text-[36px] font-medium mr-1">798</span>
          <span className="text-[18px] font-semibold text-gray-400">걸음</span>
        </div>

        <div className=" left-4 bottom-4 flex items-center min-w-full absolute">
          <img
            src={sampleDog}
            alt=""
            className="w-[108px] h-[108px] rounded-full object-cover mr-[119px]"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="px-2 py-1 bg-black text-gray-0 text-[12px] flex justify-center items-center rounded-2xl">
              12%
            </div>
            <div className="h-[70px] bg-blue-100 rounded-lg w-[45px]"></div>
            <h1>오늘</h1>
          </div>
        </div>
      </div>
      <h1 className="my-2 text-[12px] font-medium text-gray-400">
        만 걸음을 채워서 100%를 완성해 보세요
      </h1>
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
              산책 일지 확인하기
            </span>
            <span className="font-medium text-[14px] text-gray-500">
              산책을 기록할 수 있어요
            </span>
          </div>
        </div>
        <img src={chevronRight} className="w-[18px]" />
      </div>
    </div>
  );
};

export default CashWalk;
