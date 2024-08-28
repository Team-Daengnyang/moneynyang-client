import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";

export const PayMoney = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <div className="space-y-8">
          <div className="space-y-1">
            <p className="text-lg font-semibold">
              내 신한은행 통장
              <span className=" font-medium text-base">에서</span>
            </p>
            <p className="text-gray-400 text-sm">잔액: 368,230원</p>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold">
              김수영
              <span className="font-medium text-base">님에게</span>
            </p>
            <p className="text-gray-400 text-sm">신한 1234567899</p>
          </div>
        </div>
        {/* 계좌 번호 */}
        <div className="mt-12">
          <input
            type="text"
            placeholder="얼마를 보낼까요?"
            className="border rounded-lg px-4 py-3 w-full text-lg"
          />
        </div>
      </div>
      <Button text={"다음"} onClick={() => navigate("/pay/success")}></Button>
    </div>
  );
};
