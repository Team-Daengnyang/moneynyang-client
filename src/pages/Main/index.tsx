import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/UseUserStore";
import { getAccountInfo, getPetInfo, getUserInfo } from "../../api/userAPI";
import { formatName } from "../../utils/calcDate";
import { enterChat } from "../../api/chatbotAPI";
import logo from "../../assets/Main/mainLogo.png";
import profile from "../../assets/Main/profile.png";
import footprint from "../../assets/Main/footPrint.png";
import shinhan from "../../assets/Main/shinhan.png";
import animals from "../../assets/Main/animals.png";
import walk from "../../assets/Main/walk.png";
import bankbooks from "../../assets/Main/bankbook.png";
import moneybag from "../../assets/Main/moneyBag.png";
import rightAngle from "../../assets/rightAngle.png";
import chatIcon from "../../assets/icons/chaticon.png";
import { checkAccount } from "../../api/investAPI";
import { useQuery } from "react-query";
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

export const Main = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo, petInfo, setPetInfo, token } = useUserStore(
    (state) => ({
      userInfo: state.userInfo,
      setUserInfo: state.setUserInfo,
      petInfo: state.petInfo,
      setPetInfo: state.setPetInfo,
      token: state.token,
    })
  );
  const [bankLogo, setBankLogo] = useState("");
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<Account | null>({
    accountNumber: "",
    accountBalance: "",
    bankName: "",
  });

  const { data: investAccount } = useQuery("investAccount", () =>
    checkAccount(token)
  );
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log("투자계좌 확인: ", investAccount);
    if (investAccount === null) {
      setUrl("/invest/account");
    } else {
      setUrl("/invest");
    }
  }, [investAccount]);

  const getInfo = async () => {
    try {
      const userResponse = await getUserInfo(token);
      setUserInfo(userResponse);

      const petResponse = await getPetInfo(token);
      setPetInfo(petResponse);

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
    } catch (error) {
      console.error("오류 발생:", error);
    } finally {
      setLoading(false); // 데이터 로딩 완료
    }
  };

  const { formattedBankName, formattedAccountNumber } = formatName(
    account!.bankName,
    account!.accountNumber
  );

  useEffect(() => {
    getInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
  }

  return (
    <div className="h-full pt-6 px-4 bg-[#F8F8F8] overflow-auto pb-[70px] relative">
      <div className="space-y-5 ">
        <img src={logo} alt="" className="h-5 my-2 " />
        <div className="space-y-3 flex flex-col justify-between ">
          {/* 프로필 */}
          <div className="flex space-x-5 place-items-center">
            <img src={profile} alt="" className="w-[52px] h-[52px]" />
            <div>
              <p className="font-semibold">{userInfo.memberName}님</p>
              <p className="text-[#9FA4A9] text-sm font-medium">
                집사 Lv.{userInfo.memberLevel}
              </p>
            </div>
          </div>
          {/* 덕질 일 수 */}
          <div className="flex space-x-3 place-items-center">
            <img src={footprint} alt="" className="w-3 h-3" />
            <p className="font-medium text-sm text-[#73787E]">
              멍이냥에서 덕질한지{" "}
              <span className="text-[#26282B]">{userInfo.memberDate}</span>일째
            </p>
          </div>
          {/* 내 계좌 */}
          <div
            className="border rounded-lg bg-white p-5"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/account");
            }}
          >
            <p className="font-semibold text-lg mb-1">내 계좌</p>
            <div className="flex space-x-1 place-items-center mb-3">
              <img src={bankLogo} alt="" className="w-5 h-5" />
              <p className="text-sm text-[#73787E]">
                {formattedBankName} {formattedAccountNumber}
              </p>
            </div>
            <p className="font-semibold text-[26px]">
              {`${Number(account!.accountBalance).toLocaleString()}`}원
            </p>
          </div>

          {/* 메인 버튼 */}
          <div className="flex justify-between gap-2 h-[268px]">
            <div
              className="bg-main-color rounded-lg w-[50%] relative"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`${url}`)}
            >
              <p className="text-white font-semibold p-5">
                나의 펫 <br /> 덕질하기
              </p>
              <img
                src={animals}
                alt=""
                className="w-[160px] rounded-b-lg absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col justify-between w-[50%]">
              <div
                onClick={() => {
                  navigate("/cashwalk");
                }}
                className="bg-[#FFC946] rounded-lg relative h-[50%]"
                style={{ cursor: "pointer" }}
              >
                <p className="font-semibold pt-5 pl-5">
                  {petInfo.petType == "강아지"
                    ? "펫과 산책하며"
                    : "냥이 관찰하며"}
                  <br /> 돈 벌기
                </p>
                <img
                  src={walk}
                  alt=""
                  className="w-[160px] rounded-b-lg absolute bottom-0 right-0"
                />
              </div>
              <div
                onClick={() => {
                  navigate("/insurance");
                }}
                className="bg-[#E3E5E7] rounded-lg mt-2 relative  h-[50%]"
                style={{ cursor: "pointer" }}
              >
                <p className="font-semibold pt-5 pl-5">
                  펫 금융상품
                  <br /> 알아보기
                </p>
                <img
                  src={bankbooks}
                  alt=""
                  className="w-[160px] rounded-b-lg absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
          {/* 분석 페이지 */}
          <div
            className="border rounded-lg px-3 py-5 flex justify-between place-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/invest/totalSpent");
            }}
          >
            <div className="flex space-x-3 place-items-center">
              <img src={moneybag} alt="" className="w-10 h-10" />
              <p className="font-medium text-sm">
                지금까지 나는 <br />{" "}
                <span className="text-main-color">{petInfo.petName}</span>에게
                얼마나 썼을까?
              </p>
            </div>
            <img src={rightAngle} alt="" className="w-5" />
          </div>
          {/* 챗봇 */}
          <div className="flex justify-end cursor-pointer fixed bottom-20 right-4">
            <div
              onClick={() => {
                enterChat(token);
                navigate("/chatbot");
              }}
              className="flex bg-gray-0 items-center justify-center w-[56px] h-[56px] border border-gray-200 rounded-full shadow-lg"
            >
              <img src={chatIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
