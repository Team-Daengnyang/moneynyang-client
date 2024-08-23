import { useState } from "react";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";

export const Signup = () => {
  const [pwd, setPwd] = useState("");
  const [valid, setValid] = useState(true);
  const checkPwd = (input: String) => {
    if (pwd !== input) setValid(false);
    else setValid(true);
  };

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">회원 정보를 입력해주세요</p>
        <form className="space-y-5">
          {/* 이름 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              이름 <span className="text-main-color">*</span>
            </label>
            <input
              type="text"
              placeholder="이름 입력"
              required
              className="border rounded-lg px-4 py-3 w-full text-sm"
            />
          </div>
          {/* 이메일 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              이메일 <span className="text-main-color">*</span>
            </label>
            <input
              type="email"
              placeholder="이메일 입력"
              required
              className="border rounded-lg px-4 py-3 w-full text-sm"
            />
          </div>
          {/* 비밀번호 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              비밀번호 <span className="text-main-color">*</span>
            </label>
            <input
              type="password"
              placeholder="비밀번호 입력"
              required
              className="border rounded-lg px-4 py-3 w-full text-sm"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="비밀번호 재확인"
              required
              className="border rounded-lg px-4 py-3 w-full text-sm"
              onChange={(e) => {
                checkPwd(e.target.value);
              }}
            />
            {valid ? (
              ""
            ) : (
              <p className="text-sm text-red-500">비밀번호를 확인해주세요</p>
            )}
          </div>
        </form>
      </div>
      <Button text={"다음"} link={"/signup/account"}></Button>
    </div>
  );
};
