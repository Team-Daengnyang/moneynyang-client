import { useNavigate } from "react-router-dom";
import money from "../../assets/images/money.png";
import { useEffect } from "react";

const Complete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/invest");
    }, 3000);
  }, []);
  return (
    <div className="w-full h-full bg-blue-100 relative flex justify-center items-center">
      <div className="absolute top-[183px] flex flex-col items-center gap-2 mb-[21px]">
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className="text-[26px] font-semibold text-gray-0">입금 완료!</h1>
          <h1 className="text-[16px] text-gray-0">
            목표에 한 발짝 더 가까워졌어요
          </h1>
        </div>
        <div
          className="w-[360px] h-[275px] bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${money})` }}
        ></div>
      </div>
    </div>
  );
};

export default Complete;
