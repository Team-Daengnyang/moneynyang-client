export const Main = () => {
  return (
    <div className="h-full pt-6 px-4 bg-[#F8F8F8]">
      <div className="space-y-5">
        <img src="src/assets/Main/mainLogo.png" alt="" className="h-5 my-2" />
        <div className="space-y-3 flex flex-col justify-between">
          {/* 프로필 */}
          <div className="flex space-x-5 place-items-center">
            <img
              src="src/assets/Main/profile.png"
              alt=""
              className="w-[52px] h-[52px]"
            />
            <div>
              <p className="font-semibold">최승빈님</p>
              <p className="text-[#9FA4A9] text-sm font-medium">집사 Lv.4</p>
            </div>
          </div>
          {/* 덕질 일 수 */}
          <div className="flex space-x-3 place-items-center">
            <img
              src="src/assets/Main/footPrint.png"
              alt=""
              className="w-3 h-3"
            />
            <p className="font-medium text-sm text-[#73787E]">
              멍이냥에서 덕질한지 <span className="text-[#26282B]">26</span>일째
            </p>
          </div>
          {/* 내 계좌 */}
          <div className="border rounded-lg bg-white p-5">
            <p className="font-semibold text-lg mb-1">내 계좌</p>
            <div className="flex space-x-1 place-items-center mb-3">
              <img
                src="src/assets/Main/shinhan.png"
                alt=""
                className="w-5 h-5"
              />
              <p className="text-sm text-[#73787E]">신한 12-3456-7899</p>
            </div>
            <p className="font-semibold text-[26px]">398,227원</p>
          </div>
          {/* 메인 버튼 */}
          <div className="flex justify-between">
            <div
              className="bg-main-color rounded-lg"
              style={{ cursor: "pointer" }}
            >
              <p className="text-white font-semibold p-5">
                나의 펫 <br /> 덕질하기
              </p>
              <img
                src="src/assets/main/animals.png"
                alt=""
                className="w-[160px] rounded-b-lg"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div
                className="bg-[#FFC946] rounded-lg"
                style={{ cursor: "pointer" }}
              >
                <p className="font-semibold pt-5 pl-5">
                  펫과 산책하며
                  <br /> 돈 벌기
                </p>
                <img
                  src="src/assets/main/money.png"
                  alt=""
                  className="w-[160px] rounded-b-lg"
                />
              </div>
              <div
                className="bg-[#E3E5E7] rounded-lg"
                style={{ cursor: "pointer" }}
              >
                <p className="font-semibold pt-5 pl-5">
                  펫 금융상품
                  <br /> 알아보기
                </p>
                <img
                  src="src/assets/main/bankbook.png"
                  alt=""
                  className="w-[160px] rounded-b-lg"
                />
              </div>
            </div>
          </div>
          {/* 분석 페이지 */}
          <div className="border rounded-lg px-3 py-5 flex justify-between place-items-center">
            <div className="flex space-x-3 place-items-center">
              <img
                src="src/assets/Main/moneyBag.png"
                alt=""
                className="w-10 h-10"
              />
              <p className="font-medium text-sm">
                지금까지 나는 <br />{" "}
                <span className="text-main-color">아롱이</span>에게 얼마나
                썼을까?
              </p>
            </div>
            <img
              src="src/assets/rightAngle.png"
              alt=""
              className="w-5"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};