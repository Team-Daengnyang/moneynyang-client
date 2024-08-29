import { useNavigate } from "react-router-dom";
import chevronRight from "../../assets/icons/chevronRight.png";

interface IInsuranceCard {
  insuranceId: number;
  title: string;
  companyImage: string;
  price: string;
}
// {
//   "insuranceId": 1,
//   "title": "메리츠화재\n펫퍼민트 기본형",
//   "companyImage": "https://bff-images.bemypet.kr/media/medias/insurance/6762ec34-fc",
//   "price": "월 49,450원"
// }

const InsuranceCard = ({
  companyImage,
  title,
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
        <img
          src={companyImage}
          className=" mr-3 w-[48px] h-[48px] rounded-md"
        />
        <div>
          <h1 className="text-gray-500 text-[12px] font-medium">{title}</h1>
          <span className="text-[16px] font-semibold">{price}원</span>
          <span className="text-[16px] text-gray-400 ">/월</span>
        </div>
      </div>
      <img src={chevronRight} className="w-[18px]" />
    </li>
  );
};

export default InsuranceCard;
