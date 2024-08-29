import useUserStore from "../../store/UseUserStore";
import profile from "../../assets/Main/profile.png";
import coin from "../../assets/Mypage/coin.png";
import target from "../../assets/Mypage/target.png";
import { useNavigate } from "react-router-dom";

export const Mypage = () => {
  const navigate = useNavigate();
  const { userInfo, petInfo, setToken } = useUserStore((state) => ({
    userInfo: state.userInfo,
    petInfo: state.petInfo,
    setToken: state.setToken,
  }));
  const clearUserIdStorage = useUserStore.persist.clearStorage;

  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
    } else {
      return;
    }
    setToken("");
    clearUserIdStorage();
    navigate("/login", { replace: true });
  };

  return (
    <div className="h-full pt-6 px-4 bg-white">
      <p className="py-2 mb-3 text-center font-semibold">마이 페이지</p>
      <div className="space-y-5">
        {/* 프로필 */}
        <div className="bg-main-color rounded-lg p-5 space-y-5">
          <div className="flex space-x-5 place-items-cente">
            <img src={profile} alt="" className="w-[52px] h-[52px]" />
            <div className="text-white">
              <p className="font-semibold">{userInfo.memberName}님</p>
              <p className="text-sm font-medium">
                집사 Lv.{userInfo.memberLevel}
              </p>
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
        {/* 우리집 반려동물 */}
        <div className="space-y-3">
          <p className="font-semibold">우리집 반려 동물</p>
          <div className="flex space-x-3">
            <div className="border border-gray-300 rounded-lg center text-center px-6 py-3 bg-[#F4F4F4] space-y-2">
              <div
                className="w-14 h-14 rounded-full"
                style={{
                  backgroundImage: `url(${petInfo.petImage || profile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="space-y-1">
                <p className="text-sm font-medium">{petInfo.petName}</p>
                <p className="text-xs text-[#9FA4A9]">{petInfo.specie}</p>
              </div>
            </div>
            {/* 추가하기 버튼 */}
            <div className="border border-gray-300 rounded-lg center text-center px-6 py-5 bg-[#F4F4F4] space-y-2">
              <div
                className="w-14 h-14 rounded-full"
                style={{
                  backgroundImage: "url('src/assets/Mypage/plus.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                }}
              ></div>
              <p className="text-xs text-[#9FA4A9]">추가하기</p>
            </div>
          </div>
        </div>
        <hr className="border-4 border-[#F4F4F4]" />
        {/* 메뉴 리스트 */}
        <div>
          <div className="flex justify-between py-3">
            <p className="font-semibold text-sm">계좌 관리</p>
            <img
              src="src/assets/rightAngle.png"
              alt=""
              className="w-5"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex justify-between py-3">
            <p className="font-semibold text-sm">계좌 커버 커스텀</p>
            <img
              src="src/assets/rightAngle.png"
              alt=""
              className="w-5"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div
            className="flex justify-between py-3 cursor-pointer"
            onClick={() => logout()}
          >
            <p className="font-semibold text-sm">로그아웃</p>
          </div>
        </div>
        <p className="text-xs text-[#9FA4A9]">회원 탈퇴</p>
      </div>
    </div>
  );
};
