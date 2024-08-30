import { useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "../../components/Topbar";
import { depositGoal } from "../../api/investAPI";
import { useEffect, useState } from "react";
import useUserStore from "../../store/UseUserStore";
import { getAccountInfo } from "../../api/userAPI";
import { Button } from "../../components/Button";

interface IState {
  title: string;
  targetId: number;
}

interface Account {
  accountNumber: string;
  accountBalance: string;
  bankName: string;
}

const Deposit = () => {
  const navigate = useNavigate();
  const token = useUserStore((state) => state.token);
  const location = useLocation();
  const { title, targetId } = (location.state as IState) || {};
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState<Account | null>({
    accountNumber: "",
    accountBalance: "",
    bankName: "",
  });
  const [error, setError] = useState("");

  const getInfo = async () => {
    try {
      const accountResponse = await getAccountInfo(token);
      setAccount(accountResponse);
    } catch (error) {
      console.error("계좌 정보 조회 오류 발생:", error);
    }
  };

  const checkMoney = (input: number) => {
    if (input > Number(account?.accountBalance)) {
      setError("잔액이 부족해요");
    } else {
      setAmount(input);
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    depositGoal({ targetId, amount, token });
    navigate("/invest/complete");
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 relative box-border	flex flex-col">
      <TopBar title={""} skip={""} />
      <div className="mb-5">
        <div className="space-y-1">
          <h1 className="font-semibold text-[20px] text-blue-100">{title}</h1>
          <h1 className="font-semibold text-[20px]">에 얼마를 입금할까요?</h1>
          <p className="text-gray-400 text-sm">
            잔액: {Number(account?.accountBalance).toLocaleString()}원
          </p>
        </div>
      </div>
      {/* 입력할 금액 */}
      <form
        className="flex flex-col flex-grow justify-between"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1">
          <div className="flex items-center">
            <input
              onChange={(event) => {
                checkMoney(Number(event.target.value));
                console.log(amount);
              }}
              type="number"
              placeholder="입금할 금액"
              required
              max={Number(account?.accountBalance)}
              className="w-full h-[43px] p-3 border-[1px] rounded-[12px] text-[18px] placeholder:text-[14px] focus:border-blue-100 focus:outline-none"
            />
            <span className="text-gray-500 text-[14px] ml-2">원</span>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <Button text="입금하기" onClick={() => {}} />
      </form>
    </div>
  );
};

export default Deposit;
