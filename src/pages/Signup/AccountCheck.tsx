import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";

interface Response {
  accountNumber: string;
  accountTitle: string;
}

export const AccountCheck = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { accountNumber, accountTitle } = location.state as Response;
  const formattedAccountNumber = `${accountNumber.slice(
    0,
    4
  )}-${accountNumber.slice(4, 8)}-${accountNumber.slice(
    8,
    12
  )}-${accountNumber.slice(12)}`;

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar pre={"/invest/account"} title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">계좌 정보를 확인해 주세요</p>
        {/* 계좌 정보 */}
        <div className="bg-[#F4F4F4] p-5 rounded-lg place-items-center">
          <p className="font-semibold">{accountTitle}</p>
          <p className="font-medium text-gray-500">{formattedAccountNumber}</p>
        </div>
      </div>
      <Button
        text={"다음"}
        onClick={() => {
          navigate("/invest/custom", {
            state: {
              accountTitle,
              accountNumber,
            },
          });
        }}
      ></Button>
    </div>
  );
};
