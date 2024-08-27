import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignupSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center pt-6 px-4 bg-main-color text-center">
      <div className="space-y-3 mb-16">
        <p className="text-white text-2xl font-semibold">회원가입 완료!</p>
        <p className="text-white font-medium">
          멍이냥의 회원이 되신 것을 환영해요
        </p>
      </div>
      <div className="flex place-content-center">
        <img
          src={`${
            import.meta.env.VITE_PUBLIC_URL
          }/src/assets/Signup/success.png`}
          alt=""
          className="w-4/5"
        />
      </div>
    </div>
  );
};
