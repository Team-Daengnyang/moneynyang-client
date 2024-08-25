import { Route, Routes } from "react-router-dom";
import Insurance from "../pages/insurance/Insurance";
import InsuranceDetail from "../pages/insurance/InsuranceDetail";

const InsurancePages = () => {
  return (
    <div className="w-[360px] h-[780px] relative overflow-auto">
      <Routes>
        <Route path="/" element={<Insurance />} />
        <Route path="detail/:insuranceId" element={<InsuranceDetail />} />
      </Routes>
    </div>
  );
};

export default InsurancePages;
