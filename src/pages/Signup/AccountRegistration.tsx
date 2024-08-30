import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";
import { createAccount } from "../../api/investAPI";
import { useState } from "react";
import useUserStore from "../../store/UseUserStore";

interface Request {
  accountTitle: string;
  accountTypeUniqueNo: string;
}

export const AccountRegistration = () => {
  const navigate = useNavigate();
  const token = useUserStore((state) => state.token);
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedType, setSelectedType] = useState(3);
  const [request] = useState<Request>({
    accountTitle: "",
    accountTypeUniqueNo: "001-1-82fe5fa7eca441",
  });

  const banks = [
    "국민은행",
    "신한은행",
    "우리은행",
    "하나은행",
    "농협은행",
    "기업은행",
    "SC제일은행",
    "케이뱅크",
    "토스뱅크",
    "부산은행",
    "대구은행",
    "광주은행",
    "전북은행",
    "제주은행",
  ];

  const create = async () => {
    const updatedRequest = {
      ...request,
      accountTitle: selectedBank,
    };
    const createResponse = await createAccount(updatedRequest, token);
    console.log(createResponse);
    navigate("/invest/account-check", {
      state: {
        accountTitle: createResponse.accountTitle,
        accountNumber: createResponse.accountNumber,
      },
    });
  };

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">계좌를 생성해 주세요</p>
        <div className="space-y-5">
          {/* 은행 선택 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              은행 선택 <span className="text-main-color">*</span>
            </label>
            <select
              className="border rounded-lg px-4 py-3 w-full text-sm"
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
            >
              <option value="" disabled>
                은행을 선택하세요
              </option>
              {banks.map((bank, index) => (
                <option key={index} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              계좌 유형 선택 <span className="text-main-color">*</span>
            </label>
            <select
              className="border rounded-lg px-4 py-3 w-full text-sm"
              value={selectedType}
              onChange={(e) => setSelectedType(Number(e.target.value))}
            >
              <option value="" disabled>
                타입을 선택하세요
              </option>
              <option value={1}>반려동물 장기 플랜형 계좌</option>
              <option value={2}>반려동물 단기 플랜형 계좌</option>
            </select>
          </div>
          {selectedType == 1 ? (
            <div className="bg-[#DEE7FF] rounded-md p-5 space-y-2">
              <p className="font-medium text-main-color">
                ✨ 장기 플랜형 계좌란?
              </p>
              <p className="">
                반려동물과의{" "}
                <span className="font-medium underline">장기적인 플랜</span>을
                설계하기에 좋아요! <br />
                이율이 높지만 목표를 설정하고 정해진 기간 전까지는
                <br />{" "}
                <span className="underline font-medium">출금이 불가능</span>
                해요!
              </p>
            </div>
          ) : selectedType === 2 ? (
            <div className="bg-[#DEE7FF] rounded-md p-5 space-y-2">
              <p className="font-medium text-main-color">
                ✨ 단기 플랜형 계좌란?
              </p>
              <p className="">
                반려동물과의{" "}
                <span className="font-medium underline">자유로운 플랜</span>을
                설계하기에 좋아요! <br />
                자유롭게 목표를 설정하고 수정하며
                <br /> 유동적으로 아이를 덕질해요
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <Button
        text={"다음"}
        onClick={() => {
          create();
        }}
      ></Button>
    </div>
  );
};
