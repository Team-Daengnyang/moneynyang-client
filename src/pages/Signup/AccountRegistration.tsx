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
    navigate("/signup/account-check", {
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
            {banks.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
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
