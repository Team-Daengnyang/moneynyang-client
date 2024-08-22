import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";
import { useState } from "react";

export const AccountCover = () => {
  const navigate = useNavigate();
  const [myColor, setMyColor] = useState("bg-[#F4F4F4]");
  const colorList = [
    "bg-[#F4F4F4]",
    "bg-[#FFD0D0]",
    "bg-[#DEE7FF]",
    "bg-[#DEEEE7]",
    "bg-[#F6E1F8]",
  ];

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div className="space-y-5">
        <TopBar title={""} skip={"/"} />
        <div className="space-y-3">
          <p className="text-xl font-semibold">
            계좌 커버를 <br /> 커스텀 해보세요
          </p>
          <p className="text-main-color font-medium text-sm">
            사진을 첨부하거나 색상을 변경할 수 있어요
          </p>
        </div>
        <div
          className={`${myColor} px-5 py-6 flex justify-between rounded-lg place-items-end`}
        >
          <div className="space-y-3">
            <p className="font-semibold">신한은행</p>
            <p className="font-medium text-gray-500">12-3456-7899</p>
          </div>
          <img
            src={`${
              import.meta.env.VITE_PUBLIC_URL
            }/src/assets/Signup/picture.png`}
            alt=""
            className="w-[78px]"
            onClick={() => navigate("/")}
          />
        </div>
        <hr />
        <div className="space-y-5">
          <p className="font-semibold">색상 고르기</p>
          <div className="flex justify-between">
            {colorList.map((color, index) =>
              color === myColor ? (
                <div className="relative">
                  <div
                    key={index}
                    style={{ cursor: "pointer" }}
                    className={`w-14 h-14 rounded-full ${color} border-2 border-main-color`}
                    onClick={() => setMyColor(color)}
                  ></div>
                  <img
                    src={`${
                      import.meta.env.VITE_PUBLIC_URL
                    }/src/assets/Signup/check.png`}
                    alt=""
                    className="absolute top-0 right-0 w-6"
                  />
                </div>
              ) : (
                <div
                  key={index}
                  style={{ cursor: "pointer" }}
                  className={`w-14 h-14 rounded-full ${color}`}
                  onClick={() => setMyColor(color)}
                ></div>
              )
            )}
          </div>
        </div>
      </div>
      <Button text={"다음"} link={"/signup/animal"}></Button>
    </div>
  );
};
