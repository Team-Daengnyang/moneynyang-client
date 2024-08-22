import { Route, Routes } from "react-router-dom";
import { Payment } from "../pages/Payment/Payment";
import { PayComplete } from "../pages/Payment/PayComplete";
import { PayMoney } from "../pages/Payment/PayMoney";

const PaymentPages = () => {
  return (
    <div className="w-[360px] h-[780px] relative">
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/money" element={<PayMoney />} />
        <Route path="/success" element={<PayComplete />} />
      </Routes>
    </div>
  );
};

export default PaymentPages;
