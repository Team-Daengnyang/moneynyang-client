import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { LoginForm } from "../pages/Login/loginForm";

const LoginPages = () => {
  return (
    <div className="h-[100vh] relative">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default LoginPages;
