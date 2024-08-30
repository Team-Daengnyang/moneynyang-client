import { useNavigate } from "react-router-dom";
import chevronRight from "../../assets/icons/chevronRight.png";
import meritz from "../../assets/insuranceLogo/meritz.jpg";
import hyundai from "../../assets/insuranceLogo/hyundai.png";
import samsung from "../../assets/insuranceLogo/samsung.png";
import { useEffect, useState } from "react";

interface IInsuranceCard {
  insuranceId: number;
  title: string;
  companyImage: string;
  price: string;
}

const InsuranceCard = ({
  companyImage,
  title,
  price,
  insuranceId,
}: IInsuranceCard) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(companyImage);

  useEffect(() => {
    // 회사명을 추출하기 위해 '\n' 이전의 문자열을 분리
    const companyName = title.split("\n")[0];

    // 회사명에 따라 이미지 설정
    if (companyName === "메리츠화재") {
      setImgSrc(meritz);
    } else if (companyName === "현대해상") {
      setImgSrc(hyundai);
    } else if (companyName === "삼성화재") {
      setImgSrc(samsung);
    } else {
      setImgSrc(companyImage); // 기본 이미지를 사용
    }
  }, [title, companyImage]);

  return (
    <li
      onClick={() => {
        navigate(`/insurance/detail/${insuranceId}`, {
          state: {
            imgSrc,
          },
        });
      }}
      className="px-2 py-3 flex justify-between items-center border-b-2 border-gray-100 cursor-pointer"
    >
      <div className="flex items-center">
        <img src={imgSrc} className="mr-3 w-[48px] h-[48px] rounded-md" />
        <div>
          <h1 className="text-gray-500 text-[12px] font-medium">{title}</h1>
          <span className="text-[16px] font-semibold">{price}</span>
          <span className="text-[16px] text-gray-400 ">/월</span>
        </div>
      </div>
      <img src={chevronRight} className="w-[18px]" />
    </li>
  );
};

export default InsuranceCard;
