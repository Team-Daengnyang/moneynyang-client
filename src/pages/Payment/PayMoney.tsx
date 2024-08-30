import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";
import { getAccountInfo, sendMoney } from "../../api/userAPI";
import useUserStore from "../../store/UseUserStore";
import { useEffect, useState } from "react";
import { formatName } from "../../utils/calcDate";

interface Account {
  accountNumber: string;
  accountBalance: string;
  bankName: string;
}

interface IState {
  accountNumber: string;
  selectedBank: string;
}

export const PayMoney = () => {
  const navigate = useNavigate();
  const token = useUserStore((state) => state.token);
  const location = useLocation();
  const { accountNumber, selectedBank } = location.state as IState;
  const { formattedBankName, formattedAccountNumber } = formatName(
    selectedBank,
    accountNumber
  );
  const [account, setAccount] = useState<Account | null>({
    accountNumber: "",
    accountBalance: "",
    bankName: "",
  });
  const [amount, setAmount] = useState<number | "">(""); // 초기값을 빈 문자열로 설정
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
    }
  };

  const send = async () => {
    try {
      const sendResponse = await sendMoney(
        { amount: Number(amount), account: accountNumber },
        token
      );
      console.log(sendResponse);
      navigate("/pay/success", {
        state: {
          amount,
          bankName: formattedBankName,
          accountNumber: formattedAccountNumber,
        },
      });
    } catch (error) {
      console.error("입금 에러 발생:", error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <div className="space-y-8">
          <div className="space-y-1">
            <p className="text-lg font-semibold">
              내 {account?.bankName} 통장
              <span className=" font-medium text-base">에서</span>
            </p>
            <p className="text-gray-400 text-sm">
              잔액: {Number(account?.accountBalance).toLocaleString()}원
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-medium">
              <span className=" text-lg font-semibold text-main-color">
                {formattedBankName} {formattedAccountNumber}
              </span>
              으로
            </p>
          </div>
        </div>
        {/* 계좌 번호 */}
        {error && <p className="text-sm text-red-500 mt-12">{error}</p>}
        <div className="mt-2">
          <input
            type="number"
            placeholder="얼마를 보낼까요?"
            className="border rounded-lg px-4 py-3 w-full text-lg"
            value={amount}
            onChange={(e) => {
              checkMoney(Number(e.target.value));
            }}
          />
        </div>
      </div>
      <Button
        text={"다음"}
        onClick={() => {
          send();
        }}
      ></Button>
    </div>
  );
};
