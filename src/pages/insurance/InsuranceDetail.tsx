import { useNavigate, useParams } from "react-router-dom";
import { TopBar } from "../../components/Topbar";
import hanhwa from "../../assets/images/hanhwa.png";

const InsuranceDetail = () => {
  const { insuranceId } = useParams();
  const navigate = useNavigate();

  const insuranceData = {
    name: "한화손해보험",
    type: "갱신형",
    price: 52000,
    age: 10,
    summary: ["실속형", "가성비 좋고 편리해요"],
    content: [
      "실속형만 10살까지 가입 가능",
      "입/통원비 한도 연 최대 700만원",
      "저렴한 보험비로 의료비 50% 보장",
    ],
    link: "",
  };

  return (
    <div className="h-full pt-6 px-4 bg-gray-0 ">
      <TopBar skip={""} title={""} />
      {/* 보험 이름, 아이콘 */}
      <div className="bg-gray-100 h-[126px] flex justify-between items-center px-4  mb-[18px] -mx-4">
        <div className="flex  flex-col gap-2">
          <h1 className="text-gray-400 text-[14px]">
            {insuranceData.name} | {insuranceData.type}
          </h1>
          <h1 className="font-semibold text-[26px]">
            월 {insuranceData.price}원
          </h1>
        </div>
        <img src={hanhwa} className="w-[62px]" />
      </div>
      {/* 보험 내용 */}
      <div>
        <h1 className="mb-5 text-[18px] font-semibold">보험 내용</h1>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[14px]">가입 가능 나이</h1>
          <h1 className="text-gray-500 text-[14px] font-medium">
            만 {insuranceData.age}세까지
          </h1>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <h1 className="font-semibold text-[14px]">요약</h1>
          <div className="flex flex-col items-end">
            {insuranceData.summary.map((data, i) => {
              return (
                <h1 className="text-gray-500 text-[14px] font-medium" key={i}>
                  {data}
                </h1>
              );
            })}
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <h1 className="font-semibold text-[14px]">내용</h1>
          <div className="flex flex-col items-end">
            {insuranceData.content.map((data, i) => {
              return (
                <h1 className="text-gray-500 text-[14px] font-medium" key={i}>
                  {data}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(insuranceData.link);
        }}
        className="w-[320px] h-[56px] rounded-[12px] bg-blue-100 text-gray-0 absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        보험 가입하기
      </button>
    </div>
  );
};

export default InsuranceDetail;
