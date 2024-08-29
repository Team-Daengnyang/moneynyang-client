import useUserStore from "../../../store/UseUserStore";
import coin from "../../../assets/Mypage/coin.png";
import target from "../../../assets/Mypage/target.png";
import profile from "../../../assets/Main/profile.png";

export const MyProfile = () => {
  const { userInfo } = useUserStore((state) => ({
    userInfo: state.userInfo,
  }));
  return (
    <div className="bg-main-color rounded-lg p-5 space-y-5">
      <div className="flex space-x-5 place-items-cente">
        <img src={profile} alt="" className="w-[52px] h-[52px]" />
        <div className="text-white">
          <p className="font-semibold">{userInfo.memberName}님</p>
          <p className="text-sm font-medium">집사 Lv.{userInfo.memberLevel}</p>
        </div>
      </div>
      <div className="bg-[#005EED] py-5 rounded-lg flex justify-evenly">
        <div className="text-center text-white space-y-3">
          <div className="flex space-x-1">
            <img src={coin} alt="" className="w-[18px] h-[18px]" />
            <p className="font-medium text-sm">모은 포인트</p>
          </div>
          <p className="font-semibold">
            {`${Number(userInfo.memberPoint).toLocaleString()}`}P
          </p>
        </div>
        <div className="w-px bg-[#0E6EFF]"></div>
        <div className="text-center text-white space-y-3">
          <div className="flex space-x-1">
            <img src={target} alt="" className="w-[18px] h-[18px]" />
            <p className="font-medium text-sm">목표 갯수</p>
          </div>
          <p className="font-semibold">{userInfo.memberTarget}개</p>
        </div>
      </div>
    </div>
  );
};
