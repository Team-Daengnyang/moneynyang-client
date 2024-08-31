import { Route, Routes } from "react-router-dom";
import { Mypage } from "../pages/Mypage/Mypage";
import { UpdateAnimalInfo } from "../pages/Mypage/UpdateAnimalInfo";
import { MyAccount } from "../pages/Mypage/MyAccount";
import { UpdateCover } from "../pages/Mypage/UpdateCover";

const MyPages = () => {
  return (
    <div className="h-[100vh] relative">
      <Routes>
        <Route path="/" element={<Mypage />} />
        <Route path="/update" element={<UpdateAnimalInfo />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/cover" element={<UpdateCover />} />
      </Routes>
    </div>
  );
};

export default MyPages;
