import { useNavigate } from "react-router-dom";
import { TopBar } from "../../components/Topbar";
import { getAccountInfo } from "../../api/userAPI";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { checkAccount } from "../../api/investAPI";
import useUserStore from "../../store/UseUserStore";
import picture from "../../assets/Signup/picture.png";

interface Account {
  accountNumber: string;
  accountBalance: string;
  bankName: string;
}

export const MyAccount = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState<Account>({
    accountNumber: "",
    accountBalance: "",
    bankName: "",
  });
  const { token, petInfo } = useUserStore((state) => ({
    token: state.token,
    petInfo: state.petInfo,
  }));

  const formatNumber = (accountNumber: string) => {
    const formattedAccountNumber = `${accountNumber.slice(
      0,
      4
    )}-${accountNumber.slice(4, 8)}-${accountNumber.slice(
      8,
      12
    )}-${accountNumber.slice(12)}`;
    return formattedAccountNumber;
  };

  const { data: investAccount } = useQuery("investAccount", () =>
    checkAccount(token)
  );

  const getInfo = async () => {
    try {
      const accountResponse = await getAccountInfo(token);
      setAccount(accountResponse);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col">
      <TopBar pre={"/mypage"} title={"계좌 관리"} skip={""} />
      {/* 계좌 정보 */}
      <div className="space-y-5">
        <div className="border p-5 rounded-lg place-items-center">
          <p className="font-medium text-main-color text-sm mb-5">
            입출금 계좌
          </p>
          <p className="font-semibold">{account?.bankName}</p>
          <p className="font-medium text-gray-500">
            {formatNumber(account?.accountNumber)}
          </p>
        </div>
        {investAccount && (
          <div
            className={`${investAccount.accountColor} px-5 py-6 flex justify-between rounded-lg place-items-end`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/mypage/cover", {
                state: {
                  accountNumber: investAccount.accountNumber,
                  accountTitle: investAccount.accountTitle,
                  color: investAccount.accountColor,
                },
              });
            }}
          >
            <div>
              <p className="font-medium text-main-color text-sm mb-5">
                목표 계좌
              </p>
              <div>
                <p className="font-semibold">{investAccount.accountTitle}</p>
                <p className="font-medium text-gray-500">
                  {formatNumber(investAccount.accountNumber)}
                </p>
              </div>
            </div>
            <img
              src={petInfo.petImage || picture}
              alt=""
              className="w-[78px] h-[78px] object-cover rounded-full"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
