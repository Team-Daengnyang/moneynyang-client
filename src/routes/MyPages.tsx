import { Route, Routes } from "react-router-dom";
import { Mypage } from "../pages/Mypage/Mypage";
import { UpdateAnimalInfo } from "../pages/Mypage/UpdateAnimalInfo";

const MyPages = () => {
  return (
    <div className="h-[100vh] relative">
      <Routes>
        <Route path="/" element={<Mypage />} />
        <Route path="/update" element={<UpdateAnimalInfo />} />
      </Routes>
    </div>
  );
};

export default MyPages;
