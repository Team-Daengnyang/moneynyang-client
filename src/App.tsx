import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/login";
import { Selfauthentication } from "./pages/Signup/Selfauthentication";

function App() {
  return (
    <>
      {/* 너비 360px, 높이 780px로 고정 */}
      {/* pt-6 px-4 bg-white // status bar 크기 24px (pt-6), 양쪽 패딩 16px (px-4)으로 고정  */}
      <div className="w-[360px] h-[780px]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup_1" element={<Selfauthentication />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
