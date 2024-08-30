import { Route, Routes } from "react-router-dom";
import InvestPet from "../pages/investPet/InvestPet";
import Deposit from "../pages/investPet/Deposit";
import SavingsGoal from "../pages/investPet/SavingsGoal";
import TotalSpent from "../pages/investPet/TotalSpent";
import Complete from "../pages/investPet/Complete";
import { AccountCheck } from "../pages/Signup/AccountCheck";
import { AccountCover } from "../pages/Signup/AccountCover";
import { AccountRegistration } from "../pages/Signup/AccountRegistration";

const InvestPetPages = () => {
  return (
    <div className="h-[100vh] relative overflow-auto">
      <Routes>
        <Route path="/" element={<InvestPet />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="savingsGoal" element={<SavingsGoal />} />
        <Route path="totalSpent" element={<TotalSpent />} />
        <Route path="complete" element={<Complete />} />
        <Route path="/account" element={<AccountRegistration />} />
        <Route path="/account-check" element={<AccountCheck />} />
        <Route path="/custom" element={<AccountCover />} />
      </Routes>
    </div>
  );
};

export default InvestPetPages;
