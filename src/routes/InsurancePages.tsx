import { Route, Routes } from "react-router-dom";
import Insurance from "../pages/insurance/Insurance";
import InsuranceDetail from "../pages/insurance/InsuranceDetail";

const InsurancePages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Insurance />} />
        <Route path="detail/:id" element={<InsuranceDetail />} />
      </Routes>
    </div>
  );
};

export default InsurancePages;
