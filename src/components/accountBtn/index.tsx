import { useNavigate } from "react-router-dom";

export const AccountBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      className="border border-main-color rounded-lg bg-white p-5 flex place-content-center place-items-center space-x-3"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate("/signup/account");
      }}
    >
      <p className="font-semibold text-lg text-main-color">
        계좌 연결이 필요해요
      </p>
    </div>
  );
};
