import { Route, Routes } from "react-router-dom";
import { AccountInfo } from "../pages/Account/AccountInfo";
import { AccountData } from "../pages/Account/AccountData";

const AccountPages = () => {
  return (
    <div className="h-[100vh] relative">
      <Routes>
        <Route path="/" element={<AccountInfo />} />
        <Route path="/data" element={<AccountData />} />
      </Routes>
    </div>
  );
};

export default AccountPages;
