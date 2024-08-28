import { Route, Routes, useLocation } from "react-router-dom";
import InvestPetPages from "./routes/InvestPages";
import { Main } from "./pages/Main";
import { Navbar } from "./components/Navbar";
import { Mypage } from "./pages/Mypage/Mypage";
import SignupPages from "./routes/SignupPages";
import PaymentPages from "./routes/PaymentPages";
import InsurancePages from "./routes/InsurancePages";
import CashWalkPages from "./routes/CashWalkPages";
import LoginPages from "./routes/LoginPages";
import AccountPages from "./routes/AccountPages";
import ChatBot from "./pages/ChatBot/ChatBot";
// import useUserStore from "./store/UseUserStore";
// import { useEffect } from "react";

function App() {
  const location = useLocation();
  // const navigate = useNavigate();
  // const token = useUserStore((state) => state.token);

  return (
    <>
      {/* 너비 360px, 높이 780px로 고정 */}
      {/* pt-6 px-4 bg-white // status bar 크기 24px (pt-6), 양쪽 패딩 16px (px-4)으로 고정  */}
      <div className="w-[360px] h-[780px] relative">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login/*" element={<LoginPages />} />
          <Route path="/signup/*" element={<SignupPages />} />
          <Route path="/invest/*" element={<InvestPetPages />} />
          <Route path="/pay/*" element={<PaymentPages />} />
          <Route path="/insurance/*" element={<InsurancePages />} />
          <Route path="/cashwalk/*" element={<CashWalkPages />} />
          <Route path="/account/*" element={<AccountPages />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
        {location.pathname == "/" || location.pathname == "/mypage" ? (
          <Navbar />
        ) : null}
      </div>
    </>
  );
}

export default App;
