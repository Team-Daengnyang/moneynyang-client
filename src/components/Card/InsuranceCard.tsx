import { useNavigate } from "react-router-dom";
import chevronRight from "../../assets/icons/chevronRight.png";

interface IInsuranceCard {
  imgSrc: string;
  insuranceName: string;
  price: number;
  insuranceId: number;
}

const InsuranceCard = ({
  imgSrc,
  insuranceName,
  price,
  insuranceId,
}: IInsuranceCard) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/insurance/detail/${insuranceId}`);
      }}
      className="px-2 py-3 flex justify-between items-center border-b-2 border-gray-100 cursor-pointer"
    >
      <div className="flex items-center">
        <img src={imgSrc} className=" mr-3" />
        <div>
          <h1 className="text-gray-500 text-[12px] font-medium">
            {insuranceName}
          </h1>
          <span className="text-[16px] font-semibold">{price}원</span>
          <span className="text-[16px] text-gray-400 ">/월</span>
        </div>
      </div>
      <img src={chevronRight} className="w-[18px]" />
    </li>
  );
};

export default InsuranceCard;
