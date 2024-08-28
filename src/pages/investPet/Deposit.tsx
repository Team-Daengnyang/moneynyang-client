import { useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "../../components/Topbar";
import { depositGoal } from "../../api/investAPI";
import { useState } from "react";

interface IState {
  title: string;
  targetId: number;
}

const Deposit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, targetId } = (location.state as IState) || {};
  const [amount, setAmount] = useState(0);

  return (
    <div className="h-full pt-6 pb-6 px-4 bg-gray-0 relative box-border	">
      <TopBar title={""} skip={""} />
      <div className="mb-5">
        <h1 className="font-semibold text-[20px] text-blue-100">{title}</h1>
        <h1 className="font-semibold text-[20px]">에 얼마를 입금할까요?</h1>
      </div>
      {/* 입력할 금액 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          depositGoal({ targetId, amount });
          navigate("/invest/complete");
        }}
      >
        <div className="pb-6 flex items-center">
          <input
            onChange={(event) => {
              setAmount(Number(event.target.value));
              console.log(amount);
            }}
            type="number"
            placeholder="입금할 금액"
            className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[18px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none"
          />
          <span className="text-gray-500 text-[14px] ml-2">원</span>
        </div>
        <button
          type="submit"
          className="w-[320px] h-[56px] rounded-[12px] bg-blue-100 text-gray-0 absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          입금하기
        </button>
      </form>
    </div>
  );
};

export default Deposit;
