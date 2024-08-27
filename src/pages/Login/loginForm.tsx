import { useState } from "react";
import { TopBar } from "../../components/Topbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/UseUserStore";
import { Button } from "../../components/Button";

interface Member {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const setToken = useUserStore((state) => state.setToken);
  const [member, setMember] = useState<Member>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMember((prev) => ({ ...prev, [name]: value })); // 상태 업데이트
  };

  const login = async () => {
    try {
      const response = await axios.post(
        `https://moneynyang.site/api/v1/members/login`,
        {
          email: member.email,
          password: member.password,
        }
      );
      // console.log("token: ", response.data.data.accessToken);
      setToken(response.data.data.accessToken);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

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
              type="email"
              name="email"
              placeholder="이메일 입력"
              className="border rounded-lg px-4 py-3 w-full text-sm"
              onChange={handleChange}
            />
          </div>
          {/* 비밀번호 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              비밀번호 <span className="text-main-color">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호 입력"
              className="border rounded-lg px-4 py-3 w-full text-sm"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <Button onClick={() => login()} text={"로그인"} />
    </div>
  );
};
