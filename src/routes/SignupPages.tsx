import { Route, Routes, useNavigate } from "react-router-dom";
import { AnimalCheck } from "../pages/Signup/AnimalCheck";
import { AnimalInfo } from "../pages/Signup/AnimalInfo";
import { Signup } from "../pages/Signup/Signup";
import { SignupSuccess } from "../pages/Signup/SignupSuccess";
import useUserStore from "../store/UseUserStore";
import { useEffect } from "react";

const SignupPages = () => {
  const navigate = useNavigate();
  const { token } = useUserStore((state) => ({
    token: state.token,
  }));

  useEffect(() => {
    if (token != "") {
      navigate("/");
    }
  });
  return (
    <div className="h-[100vh] relative">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/animal" element={<AnimalInfo />} />
        <Route path="/check" element={<AnimalCheck />} />
        <Route path="/success" element={<SignupSuccess />} />
      </Routes>
    </div>
  );
};

export default SignupPages;
