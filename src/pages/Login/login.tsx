import { useNavigate } from "react-router-dom";
import loginlogo from "../../assets/Login/loginLogo.png";
import loginimg from "../../assets/Login/loginImg.png";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-center pt-6 px-4 bg-main-color text-center">
      <div className="space-y-5 mb-20">
        <div className="flex place-content-center">
          <img src={loginlogo} alt="" width={165} />
        </div>
        <p className="text-white">반려동물과 함께하는 금융 서비스</p>
      </div>
      <div className="flex place-content-center">
        <img src={loginimg} alt="" className="w-full" />
      </div>
      <div className="flex-col place-content-center space-y-3">
        <div
          className="w-full rounded-md bg-[#26282B] text-center py-4 flex place-content-center space-x-3"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/login/form");
          }}
        >
          <p className=" font-semibold text-white">로그인하기</p>
        </div>
        <p className=" font-medium text-white">
          아직 가입을 안하셨다면?{" "}
          <span
            className="border-b"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원 가입하기
          </span>
        </p>
      </div>
    </div>
  );
};
