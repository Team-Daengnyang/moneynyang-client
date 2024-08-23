import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";

export const Payment = () => {
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
  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">어떤 계좌로 보낼까요?</p>
        <div className="space-y-5">
          {/* 계좌 번호 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              계좌번호 입력 <span className="text-main-color">*</span>
            </label>
            <input
              type="text"
              placeholder="예) 춘삼이"
              className="border rounded-lg px-4 py-3 w-full text-sm"
            />
          </div>
          {/* 은행 선택 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              은행 선택 <span className="text-main-color">*</span>
            </label>
            <select className="border rounded-lg px-4 py-3 w-full text-sm">
              {banks.map((bank, index) => (
                <option key={index} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Button text={"다음"} link={"/pay/money"}></Button>
    </div>
  );
};