// import { useNavigate } from "react-router-dom";
import { TopBar } from "../../components/Topbar";

export const AnimalCheck = () => {
  //   const navigate = useNavigate();
  const openAndClosePage = (): void => {
    // 새 페이지 열기
    const newWindow: Window | null = window.open("/signup/success"); // 여기에 열고 싶은 페이지의 URL을 입력하세요.

    if (newWindow) {
      // 3초 후에 새 페이지 닫기 및 메인 화면으로 이동
      setTimeout((): void => {
        newWindow.close(); // 새 페이지 닫기
        window.location.href = "/"; // 메인 화면으로 이동 (여기에 메인 페이지의 URL을 입력하세요)
      }, 2500); // 3000ms = 3초
    } else {
      console.error("새 창을 열 수 없습니다. 팝업 차단기를 확인하세요.");
    }
  };

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xl font-semibold">
              반려 동물 정보가 알맞는지 <br /> 확인해 주세요
            </p>
            <p className="text-main-color font-medium text-sm">
              수정하고 싶다면 뒤로가기를 눌러주세요
            </p>
          </div>
          <div className="bg-[#F4F4F4] p-5 rounded-lg place-items-center space-y-3">
            <p className="font-semibold">아롱이</p>
            <table className="text-sm text-left border-separate border-spacing-y-2">
              <tr>
                <th className="text-[#9FA4A9] font-medium">성별</th>
                <td className="px-5">여아</td>
              </tr>
              <tr>
                <th className="text-[#9FA4A9] font-medium">몸무게</th>
                <td className="px-5">3.6kg</td>
              </tr>
              <tr>
                <th className="text-[#9FA4A9] font-medium">생년월일</th>
                <td className="px-5">201126</td>
              </tr>
              <tr>
                <th className="text-[#9FA4A9] font-medium">반려동물 타입</th>
                <td className="px-5">말티즈</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <button
        className="py-4 my-5 bg-main-color text-center text-white font-medium block rounded-lg"
        onClick={openAndClosePage}
      >
        확인 완료
      </button>
    </div>
  );
};
