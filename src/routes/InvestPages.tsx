import { Route, Routes } from "react-router-dom";
import InvestPet from "../pages/investPet/InvestPet";
import Deposit from "../pages/investPet/Deposit";
import SavingsGoal from "../pages/investPet/SavingsGoal";
import TotalSpent from "../pages/investPet/TotalSpent";
import Complete from "../pages/investPet/Complete";

const InvestPetPages = () => {
  return (
    <div className="w-[360px] h-[780px] relative">
      <Routes>
        <Route path="/" element={<InvestPet />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="savingsGoal" element={<SavingsGoal />} />
        <Route path="totalSpent" element={<TotalSpent />} />
        <Route path="complete" element={<Complete />} />
      </Routes>
    </div>
  );
};

export default InvestPetPages;
