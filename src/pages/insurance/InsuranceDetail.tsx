import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TopBar } from "../../components/Topbar";
import { getInsuranceDetail } from "../../api/insuranceAPI";
import { useQuery } from "react-query";
import useUserStore from "../../store/UseUserStore";
import { useEffect, useState } from "react";
import meritz from "../../assets/insuranceLogo/meritz.jpg";
import hyundai from "../../assets/insuranceLogo/hyundai.png";
import samsung from "../../assets/insuranceLogo/samsung.png";

const InsuranceDetail = () => {
  const { insuranceId } = useParams();
  const [numberId, setNumberId] = useState<number | null>(null);
  const location = useLocation();

  let { imgSrc } = location.state || {};

  useEffect(() => {
    const parsedId = Number(insuranceId);
    if (!isNaN(parsedId)) {
      setNumberId(parsedId);
    }
  }, [insuranceId]);

  const { token } = useUserStore((state) => ({
    token: state.token,
  }));

  const { data: insuranceData } = useQuery(
    ["insuranceDatas", numberId],
    () => getInsuranceDetail(numberId as number, token),
    {
      enabled: numberId !== null,
      onSuccess: (data) => {
        console.log("Fetched data:", data);
        console.log("Number ID:", numberId);

        // 회사명에 따라 이미지 재설정
        const companyName = data?.title?.split("\n")[0];
        if (companyName === "메리츠화재") {
          imgSrc = meritz;
        } else if (companyName === "현대해상") {
          imgSrc = hyundai;
        } else if (companyName === "삼성화재") {
          imgSrc = samsung;
        }
      },
    }
  );

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 ">
      <TopBar pre={"/insurance"} skip={""} title={"보험상품 자세히 알아보기"} />
      {/* 보험 이름, 아이콘 */}
      <div className="bg-gray-100 h-[126px] flex justify-between items-center px-4  mb-[18px] -mx-4">
        <div className="flex  flex-col gap-2">
          <h1 className="text-gray-400 text-[14px]">{insuranceData?.title}</h1>
          <h1 className="font-semibold text-[26px]">{insuranceData?.price}</h1>
        </div>
        <img src={imgSrc} className="w-[62px] h-[62px] rounded-md" />
      </div>
      {/* 보험 내용 */}
      <div>
        <h1 className="mb-5 text-[18px] font-semibold">보험 내용</h1>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[14px]">가입 가능 나이</h1>
          <h1 className="text-gray-500 text-[14px] font-medium">
            {insuranceData?.insuranceAge}
          </h1>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <h1 className="font-semibold text-[14px]">요약</h1>
          <h1 className="text-gray-500 text-[14px] font-medium">
            {insuranceData?.summary}
          </h1>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between flex-col">
          <h1 className="font-semibold text-[14px] mb-3">내용</h1>
          <div className="flex flex-col items-end w-[100%]">
            <h1 className="text-gray-500 text-[14px] font-medium">
              {insuranceData?.comment}
            </h1>
          </div>
        </div>
      </div>
      <Link
        to={insuranceData?.url || "#"}
        className="w-[320px] h-[56px] rounded-[12px] bg-blue-100 text-gray-0 absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center"
      >
        보험 가입하기
      </Link>
    </div>
  );
};

export default InsuranceDetail;
