import { Route, Routes } from "react-router-dom";
import { AccountCover } from "../pages/Signup/AccountCover";
import { AccountRegistration } from "../pages/Signup/AccountRegistration";
import { AnimalCheck } from "../pages/Signup/AnimalCheck";
import { AnimalInfo } from "../pages/Signup/AnimalInfo";
import { Selfauthentication } from "../pages/Signup/Selfauthentication";
import { SignupSuccess } from "../pages/Signup/SignupSuccess";

const SignupPages = () => {
  return (
    <div className="w-[360px] h-[780px] relative">
      <Routes>
        <Route path="/" element={<Selfauthentication />} />
        <Route path="/account" element={<AccountRegistration />} />
        <Route path="/custom" element={<AccountCover />} />
        <Route path="/animal" element={<AnimalInfo />} />
        <Route path="/check" element={<AnimalCheck />} />
        <Route path="/success" element={<SignupSuccess />} />
      </Routes>
    </div>
  );
};

export default SignupPages;
