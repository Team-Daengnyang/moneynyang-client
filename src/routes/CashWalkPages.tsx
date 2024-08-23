import { Route, Routes } from "react-router-dom";
import CashWalk from "../pages/CashWalk/CashWalk";

const CashWalkPages = () => {
  return (
    <div className="w-[360px] h-[780px] relative">
      <Routes>
        <Route path="/" element={<CashWalk />} />
      </Routes>
    </div>
  );
};

export default CashWalkPages;
