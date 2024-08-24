import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";

export const LoginForm = () => {
  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">로그인 정보를 입력해주세요</p>
        <div className="space-y-5">
          {/* 이메일 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              이메일 <span className="text-main-color">*</span>
            </label>
            <input
              type="text"
              placeholder="이메일 입력"
              className="border rounded-lg px-4 py-3 w-full text-sm"
            />
          </div>
          {/* 비밀번호 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              비밀번호 <span className="text-main-color">*</span>
            </label>
            <input
              type="text"
              placeholder="비밀번호 입력"
              className="border rounded-lg px-4 py-3 w-full text-sm"
            />
          </div>
        </div>
      </div>
      <Button text={"로그인"} link={"/"}></Button>
    </div>
  );
};
