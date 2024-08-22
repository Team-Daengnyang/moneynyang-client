import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";

export const Selfauthentication = () => {
  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold">본인 인증을 해주세요</p>
      </div>
      <Button text={"다음"} link={"/signup/account"}></Button>
    </div>
  );
};
