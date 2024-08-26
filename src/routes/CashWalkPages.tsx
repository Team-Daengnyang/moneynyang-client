import { Route, Routes } from "react-router-dom";
import CashWalk from "../pages/CashWalk/CashWalk";
import CalendarView from "../pages/CashWalk/CalendarView";
import Write from "../pages/CashWalk/Write";

const CashWalkPages = () => {
  return (
    <div className="w-[360px] h-[780px] relative">
      <Routes>
        <Route path="/" element={<CashWalk />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
};

export default CashWalkPages;
