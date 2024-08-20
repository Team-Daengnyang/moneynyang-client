import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";

export const AccountCover = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={"/"} />
        <div className="mb-5 space-y-3">
          <p className="text-xl font-semibold">
            계좌 커버를 <br /> 커스텀 해보세요
          </p>
          <p className="text-main-color font-medium text-sm">
            사진을 첨부하거나 색상을 변경할 수 있어요
          </p>
        </div>
        <div className="bg-[#F4F4F4] p-5 flex justify-between rounded-lg place-items-end">
          <div className="space-y-3">
            <p className="font-semibold">신한은행</p>
            <p className="font-medium text-gray-500">12-3456-7899</p>
          </div>
          <img
            src="src/assets/Signup/picture.png"
            alt=""
            className="w-[78px]"
            onClick={() => navigate("/custom")}
          />
        </div>
      </div>
      <Button text={"다음"} link={"/"}></Button>
    </div>
  );
};
