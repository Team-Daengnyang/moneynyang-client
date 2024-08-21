import { Route, Routes, useLocation } from "react-router-dom";
import { Login } from "./pages/Login/login";
import { Selfauthentication } from "./pages/Signup/Selfauthentication";
import { AccountRegistration } from "./pages/Signup/AccountRegistration";
import { AccountCover } from "./pages/Signup/AccountCover";
import { AnimalInfo } from "./pages/Signup/AnimalInfo";
import { AnimalCheck } from "./pages/Signup/AnimalCheck";
import { SignupSuccess } from "./pages/Signup/SignupSuccess";
import { Main } from "./pages/Main";
import { Navbar } from "./components/Navbar";
import { Mypage } from "./pages/Mypage/Mypage";

function App() {
  const location = useLocation();
  return (
    <>
      {/* 너비 360px, 높이 780px로 고정 */}
      {/* pt-6 px-4 bg-white // status bar 크기 24px (pt-6), 양쪽 패딩 16px (px-4)으로 고정  */}
      <div className="w-[360px] h-[780px] relative">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Selfauthentication />} />
          <Route path="/account" element={<AccountRegistration />} />
          <Route path="/custom" element={<AccountCover />} />
          <Route path="/animal" element={<AnimalInfo />} />
          <Route path="/animal_check" element={<AnimalCheck />} />
          <Route path="/success" element={<SignupSuccess />} />
        </Routes>
        {location.pathname == "/" || location.pathname == "/mypage" ? (
          <Navbar />
        ) : null}
      </div>
    </>
  );
}

export default App;
