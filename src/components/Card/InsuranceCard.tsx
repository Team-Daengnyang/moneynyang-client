import React from "react";
import hanhwa from "../../assets/images/hanhwa.png";
import chevronRight from "../../assets/icons/chevronRight.png";

const InsuranceCard = () => {
  return (
    <li className="px-2 py-3 flex justify-between items-center border-b-2 border-gray-100 cursor-pointer">
      <div className="flex items-center">
        <img src={hanhwa} className=" mr-3" />
        <div>
          <h1 className="text-gray-500 text-[12px] font-medium">
            한화손해보험
          </h1>
          <span className="text-[16px] font-semibold">52,000원</span>
          <span className="text-[16px] text-gray-400 ">/월</span>
        </div>
      </div>
      <img src={chevronRight} className="w-[18px]" />
    </li>
  );
};

export default InsuranceCard;
