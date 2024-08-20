import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";

export const AccountRegistration = () => {
  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">계좌를 등록해 주세요</p>
        <div className="bg-[#F4F4F4] p-5 flex justify-between rounded-lg place-items-center">
          <p className="font-semibold">충전 계좌 등록하기</p>
          <img src="src/assets/Signup/plus.png" alt="" className="w-8" />
        </div>
      </div>
      <Button text={"다음"} link={"/"}></Button>
    </div>
  );
};
