import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bluecheck from "../../assets/Main/blueCheck.png";

interface IState {
  amount: number;
  bankName: string;
  accountNumber: string;
}

export const PayComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, bankName, accountNumber } = location.state as IState;
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center pt-6 px-4 bg-main-color text-center space-y-5">
      <div className="flex place-content-center">
        <img src={bluecheck} alt="" className="w-[60px]" />
      </div>
      <div className="space-y-3 mb-16">
        <p className="text-white font-medium text-xl">
          <span className="font-normal">
            {bankName} {accountNumber}
          </span>
          <span className="text-base">으로</span> <br />{" "}
          {Number(amount).toLocaleString()}
          원을 보냈어요
        </p>
      </div>
    </div>
  );
};
