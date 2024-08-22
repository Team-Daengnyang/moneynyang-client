// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../../components/Topbar";

export const AnimalCheck = () => {
  const navigate = useNavigate();

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
        onClick={() => {
          navigate("/signup/success");
        }}
      >
        확인 완료
      </button>
    </div>
  );
};
