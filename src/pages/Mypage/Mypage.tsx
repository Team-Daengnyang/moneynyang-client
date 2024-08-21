export const Mypage = () => {
  return (
    <div className="h-full pt-6 px-4 bg-white">
      <p className="py-2 mb-3 text-center font-semibold">마이 페이지</p>
      <div className="space-y-5">
        {/* 프로필 */}
        <div className="bg-main-color rounded-lg p-5 space-y-5">
          <div className="flex space-x-5 place-items-cente">
            <img
              src="src/assets/Main/profile.png"
              alt=""
              className="w-[52px] h-[52px]"
            />
            <div className="text-white">
              <p className="font-semibold">최승빈님</p>
              <p className="text-sm font-medium">집사 Lv.4</p>
            </div>
          </div>
          <div className="bg-[#005EED] py-5 rounded-lg flex justify-evenly">
            <div className="text-center text-white space-y-3">
              <div className="flex space-x-1">
                <img
                  src="src/assets/Mypage/coin.png"
                  alt=""
                  className="w-[18px] h-[18px]"
                />
                <p className="font-medium text-sm">모은 포인트</p>
              </div>
              <p className="font-semibold">1,320P</p>
            </div>
            <div className="w-px bg-[#0E6EFF]"></div>
            <div className="text-center text-white space-y-3">
              <div className="flex space-x-1">
                <img
                  src="src/assets/Mypage/target.png"
                  alt=""
                  className="w-[18px] h-[18px]"
                />
                <p className="font-medium text-sm">목표 갯수</p>
              </div>
              <p className="font-semibold">8개</p>
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
                  backgroundImage: "url('src/assets/dogSample.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="space-y-1">
                <p className="text-sm font-medium">아롱이</p>
                <p className="text-xs text-[#9FA4A9]">말티즈</p>
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
          <div className="flex justify-between py-3">
            <p className="font-semibold text-sm">로그아웃</p>
          </div>
        </div>
        <p className="text-xs text-[#9FA4A9]">회원 탈퇴</p>
      </div>
    </div>
  );
};
