import useUserStore from "../../store/UseUserStore";
import { useNavigate } from "react-router-dom";
import { MyProfile } from "./components/MyProfile";
import { MyPets } from "./components/MyPets";
import rightAngle from "../../assets/rightAngle.png";

export const Mypage = () => {
  const navigate = useNavigate();
  const { setToken } = useUserStore((state) => ({
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
        <MyProfile />
        {/* 우리집 반려동물 */}
        <div className="space-y-3">
          <p className="font-semibold">우리집 반려 동물</p>
          <MyPets />
        </div>
        <hr className="border-4 border-[#F4F4F4]" />
        {/* 메뉴 리스트 */}
        <div>
          <div className="flex justify-between py-3">
            <p className="font-semibold text-sm">계좌 관리</p>
            <img
              src={rightAngle}
              alt=""
              className="w-5"
              style={{ cursor: "pointer" }}
            />
          </div>
          {/* <div className="flex justify-between py-3">
            <p className="font-semibold text-sm">계좌 커버 커스텀</p>
            <img
              src="src/assets/rightAngle.png"
              alt=""
              className="w-5"
              style={{ cursor: "pointer" }}
            />
          </div> */}
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
