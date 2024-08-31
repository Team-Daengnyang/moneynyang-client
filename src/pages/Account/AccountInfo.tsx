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
import { AccountInfoCard } from "../../components/Card/AccountInfoCard";
import shinhan from "../../assets/Main/shinhan.png";
import 광주 from "../../assets/bankLogo/광주.jpeg";
import 국민 from "../../assets/bankLogo/국민.png";
import 기업 from "../../assets/bankLogo/기업.png";
import 대구 from "../../assets/bankLogo/대구.png";
import 부산 from "../../assets/bankLogo/부산.png";
import 우리 from "../../assets/bankLogo/우리.png";
import 전북 from "../../assets/bankLogo/전북.png";
import 제주 from "../../assets/bankLogo/제주.png";
import 토스 from "../../assets/bankLogo/토스.jpg";
import 하나 from "../../assets/bankLogo/하나.png";
import 한국 from "../../assets/bankLogo/한국.jpg";
import 신한 from "../../assets/bankLogo/shinhan.png";
import 농협 from "../../assets/bankLogo/농협.png";
import sc from "../../assets/bankLogo/sc.png";
import k from "../../assets/bankLogo/k.png";

interface Account {
  accountNumber: string;
  accountBalance: string;
  bankName: string;
}

interface accountInfo {
  transactionUniqueNo: number;
  transactionDate: string;
  transactionTime: string;
  transactionBalance: number;
  transactionAfterBalance: number;
  transactionSummary: string; // 입금 출금
}

export const AccountInfo = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { token } = useUserStore((state) => ({
    token: state.token,
  }));
  const [bankLogo, setBankLogo] = useState("");
  const [account, setAccount] = useState<Account | null>({
    accountNumber: "",
    accountBalance: "",
    bankName: "",
  });
  const { year, month } = getDate(currentDate);
  const [infoList, setInfoList] = useState<accountInfo[]>([]);

  const getInfo = async () => {
    const accountResponse = await getAccountInfo(token);
    setAccount(accountResponse);

    if (accountResponse.bankName === "국민은행") {
      setBankLogo(국민);
    } else if (accountResponse.bankName === "신한은행") {
      setBankLogo(shinhan);
    } else if (accountResponse.bankName === "우리은행") {
      setBankLogo(우리);
    } else if (accountResponse.bankName === "하나은행") {
      setBankLogo(하나);
    } else if (accountResponse.bankName === "농협은행") {
      setBankLogo(농협);
    } else if (accountResponse.bankName === "기업은행") {
      setBankLogo(기업);
    } else if (accountResponse.bankName === "SC제일은행") {
      setBankLogo(sc);
    } else if (accountResponse.bankName === "케이뱅크") {
      setBankLogo(k);
    } else if (accountResponse.bankName === "토스뱅크") {
      setBankLogo(토스);
    } else if (accountResponse.bankName === "부산은행") {
      setBankLogo(부산);
    } else if (accountResponse.bankName === "대구은행") {
      setBankLogo(대구);
    } else if (accountResponse.bankName === "광주은행") {
      setBankLogo(광주);
    } else if (accountResponse.bankName === "전북은행") {
      setBankLogo(전북);
    } else if (accountResponse.bankName === "제주은행") {
      setBankLogo(제주);
    } else if (accountResponse.bankName === "한국은행") {
      setBankLogo(한국);
    } else if (accountResponse.bankName === "신한은행") {
      setBankLogo(신한);
    } else {
      setBankLogo(""); // 해당되지 않는 경우 기본값 설정
    }

    const { startDate, endDate } = getRangeDate(currentDate);

    const listResponse = await axios.get(
      `https://moneynyang.site/api/v1/target-detail`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          startDate,
          endDate,
          accountNo: accountResponse!.accountNumber,
        },
      }
    );
    setInfoList(listResponse.data.data);
    console.log(infoList);
  };

  const { formattedBankName, formattedAccountNumber } = formatName(
    account!.bankName,
    account!.accountNumber
  );

  useEffect(() => {
    getInfo();
  }, [currentDate]); // currentDate가 변경될 때마다 getInfo 호출

  return (
    <div className="h-full flex flex-col py-6 px-4 bg-gray-0 ">
      <TopBar title={"거래 내역 조회"} skip={""} pre={""} />
      <div className="space-y-4">
        {/* 내 계좌 */}
        <div className="mb-5">
          <div className="flex space-x-1 place-items-center mb-1">
            <img src={bankLogo} alt="" className="w-5 h-5" />
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
      </div>
      {/* 거래 내역 리스트 */}
      <div className="space-y-4 overflow-y-auto h-full">
        {infoList?.map((data, index) => {
          return <AccountInfoCard key={index} {...data} />;
        })}
      </div>
    </div>
  );
};
