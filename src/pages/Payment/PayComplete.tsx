import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PayComplete = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div className="h-full flex flex-col justify-center pt-6 px-4 bg-main-color text-center space-y-5">
      <div className="flex place-content-center">
        <img
          src={`${
            import.meta.env.VITE_PUBLIC_URL
          }/src/assets/Main/blueCheck.png`}
          alt=""
          className="w-[60px]"
        />
      </div>
      <div className="space-y-3 mb-16">
        <p className="text-white font-medium text-xl">
          김수영에게 <br /> 50,000원을 보냈어요
        </p>
      </div>
    </div>
  );
};
