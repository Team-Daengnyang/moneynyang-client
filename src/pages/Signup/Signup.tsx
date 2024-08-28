import { useState } from "react";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";
import { useNavigate } from "react-router-dom";
import useSignupStore from "../../store/UseSignupStore";

export const Signup = () => {
  const navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const [valid, setValid] = useState(true);
  const { inputUserInfo, setInputUserInfo } = useSignupStore((state) => ({
    inputUserInfo: state.inputUserInfo,
    setInputUserInfo: state.setInputUserInfo,
  }));

  // 비밀번호 검증
  const checkPwd = (input: string) => {
    if (pwd !== input) setValid(false);
    else setValid(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputUserInfo({ [name]: value });
  };

  const signup = () => {
    navigate("/signup/animal");
  };

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">회원 정보를 입력해주세요</p>
        <form className="space-y-5">
          {/* 이름 */}
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium text-sm">
              이름 <span className="text-main-color">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={inputUserInfo.name}
              placeholder="이름 입력"
              required
              className="border rounded-lg px-4 py-3 w-full text-sm"
              onChange={handleChange} // 상태 업데이트
            />
          </div>
          {/* 이메일 */}
          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium text-sm">
              이메일 <span className="text-main-color">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={inputUserInfo.email}
              placeholder="이메일 입력"
              required
              className="border rounded-lg px-4 py-3 w-full text-sm"
              onChange={handleChange} // 상태 업데이트
            />
          </div>
          {/* 비밀번호 */}
          <div className="space-y-2">
            <label htmlFor="password" className="block font-medium text-sm">
              비밀번호 <span className="text-main-color">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호 입력"
              required
              className="border rounded-lg px-4 py-3 w-full text-sm"
              onChange={(e) => {
                handleChange(e); // 상태 업데이트
                setPwd(e.target.value);
                setValid(true); // 비밀번호 입력 시 유효성 초기화
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
      <Button
        text={"다음"}
        onClick={() => {
          signup();
        }}
      ></Button>
    </div>
  );
};
