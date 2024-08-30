import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";
import React, { useState } from "react";

export const Payment = () => {
  const navigate = useNavigate();
  const [accountNumber, setAccountNumber] = useState(""); // 계좌 번호 상태 추가
  const [selectedBank, setSelectedBank] = useState(""); // 선택된 은행 상태 추가
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 제출 동작 방지
    navigate("/pay/money", {
      state: {
        accountNumber,
        selectedBank,
      },
    });
  };

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col">
      <TopBar title={""} skip={""} />
      <p className="text-xl font-semibold mb-5">어떤 계좌로 보낼까요?</p>
      <form
        className="flex flex-col justify-between flex-grow"
        onSubmit={handleSubmit}
      >
        <div className="space-y-5">
          {/* 계좌 번호 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              계좌번호 입력 <span className="text-main-color">*</span>
            </label>
            <input
              type="number"
              placeholder="계좌번호를 입력해주세요"
              className="border rounded-lg px-4 py-3 w-full text-sm focus:border-blue-100 focus:outline-none"
              value={accountNumber}
              required
              min={1000000000000000}
              max={9999999999999999}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
          {/* 은행 선택 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              은행 선택 <span className="text-main-color">*</span>
            </label>
            <select
              className="border rounded-lg px-4 py-3 w-full text-sm focus:border-blue-100 focus:outline-none"
              value={selectedBank}
              required
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
        </div>
        <Button text={"다음"} onClick={() => {}}></Button>
      </form>
    </div>
  );
};
