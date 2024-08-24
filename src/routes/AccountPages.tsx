import { Route, Routes } from "react-router-dom";
import { PayComplete } from "../pages/Payment/PayComplete";
import { AccountInfo } from "../pages/Account/AccountInfo";

const AccountPages = () => {
  return (
    <div className="w-[360px] h-[780px] relative">
      <Routes>
        <Route path="/" element={<AccountInfo />} />
        <Route path="/data" element={<PayComplete />} />
      </Routes>
    </div>
  );
};

export default AccountPages;
