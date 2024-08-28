import { TopBar } from "../../components/Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccountInfo } from "../../api/userAPI";
import useUserStore from "../../store/UseUserStore";
import axios from "axios";
import {
  decrement,
  formatName,
  getDate,
  getRangeDate,
  increment,
} from "../../utils/calcDate";

interface Account {
  accountNumber: string;
  accountBalance: string;
  bankName: string;
}

export const AccountInfo = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { token } = useUserStore((state) => ({
    token: state.token,
  }));

  const [account, setAccount] = useState<Account | null>({
    accountNumber: "",
    accountBalance: "",
    bankName: "",
  });
  const { year, month } = getDate(currentDate);

  const getInfo = async () => {
    const accountResponse = await getAccountInfo(token);
    setAccount(accountResponse);

    const { startDate, endDate } = getRangeDate(currentDate);

    const historyResponse = await axios.get(
      `https://moneynyang.site/api/v1/accounts/history`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          startDate,
          endDate,
          accountName: account!.accountNumber,
        },
      }
    );
  };

  const { formattedBankName, formattedAccountNumber } = formatName(
    account!.bankName,
    account!.accountNumber
  );

  useEffect(() => {
    getInfo();
  }, [currentDate]); // currentDate가 변경될 때마다 getInfo 호출

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 ">
      <TopBar title={"거래 내역 조회"} skip={""} />
      <div className="space-y-4">
        {/* 내 계좌 */}
        <div className="mb-5">
          <div className="flex space-x-1 place-items-center mb-1">
            <img src="src/assets/Main/shinhan.png" alt="" className="w-5 h-5" />
            <p className="text-sm text-[#73787E]">
              {formattedBankName} {formattedAccountNumber}
            </p>
          </div>
          <p className="font-semibold text-[26px]">
            {`${Number(account!.accountBalance).toLocaleString()}`}원
          </p>
        </div>
        {/* 버튼 */}
        <div className="flex justify-between w-full space-x-2">
          <div
            className="w-1/2 py-3 text-center rounded-lg font-medium text-sm 
                    bg-[#E8F1FF] text-main-color"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/account/data");
            }}
          >
            <p>계좌상세</p>
          </div>
          <div
            className="w-1/2 py-3 text-center rounded-lg font-medium text-sm 
                    bg-main-color text-white"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/pay");
            }}
          >
            <p>이체</p>
          </div>
        </div>
        {/*  */}
        <div className=" bg-gray-100 h-2 w-full" />
        {/* 월 선택 */}
        <div className="flex place-content-center space-x-3 place-items-center">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-gray-400 text-lg"
            onClick={() => setCurrentDate(decrement(currentDate))}
          />
          <p className="font-medium">{`${year}년 ${month}`}</p>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-gray-400 text-lg"
            onClick={() => setCurrentDate(increment(currentDate))}
          />
        </div>
        {/* 거래 내역 리스트 */}
        <div className=" border-b border-gray-100 space-y-3 py-5">
          <p className="font-medium text-gray-500 text-xs">
            2024.08.23 <span className="text-gray-400">15:05:28</span>
          </p>
          <div className="flex justify-between">
            <p className="font-medium text-lg">최승빈</p>
            <div className="text-right space-y-1">
              <p className="text-lg text-main-color font-semibold">+1,500원</p>
              <p className="text-gray-500 font-medium">잔액 394,277원</p>
            </div>
          </div>
        </div>
        <div className=" border-b border-gray-100 space-y-3 py-5">
          <p className="font-medium text-gray-500 text-xs">
            2024.08.23 <span className="text-gray-400">15:05:28</span>
          </p>
          <div className="flex justify-between">
            <p className="font-medium text-lg">최승빈</p>
            <div className="text-right space-y-1">
              <p className="text-lg text-main-color font-semibold">+1,500원</p>
              <p className="text-gray-500 font-medium">잔액 394,277원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
