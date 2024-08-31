import { useLocation, useNavigate } from "react-router-dom";
import home0 from "../../assets/Navbar/home0.png";
import home1 from "../../assets/Navbar/home1.png";
import person0 from "../../assets/Navbar/person0.png";
import person1 from "../../assets/Navbar/person1.png";
import card from "../../assets/Navbar/card.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const homeColor =
    location.pathname === "/" ? "text-main-color" : "text-[#9FA4A9]";
  const myColor =
    location.pathname === "/" ? "text-[#9FA4A9]" : "text-main-color";

  return (
    <div className="w-full flex py-2 absolute bottom-0 bg-white justify-evenly place-items-end border-t">
      <div
        className="text-center"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img
          src={location.pathname === "/" ? home1 : home0}
          className="w-6 mb-1"
          onClick={() => navigate("/")}
        />
        <p className={`font-medium text-xs ${homeColor}`}>홈</p>
      </div>
      <div
        className="text-center"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/pay")}
      >
        <div className="flex flex-col place-items-center place-content-center">
          <div className="absolute bottom-8 rounded-full p-4 bg-gradient-to-b from-[#FFC436] to-[#FFAF36] z-10">
            <img src={card} className="w-6 h-6" />
          </div>
          <p className="font-medium text-[#9FA4A9] text-xs">결제</p>
        </div>
      </div>
      <div
        className="text-center"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/mypage")}
      >
        <img
          src={location.pathname === "/" ? person0 : person1}
          className="w-6 mb-1"
        />
        <p className={`font-medium text-xs ${myColor}`}>마이</p>
      </div>
    </div>
  );
};
