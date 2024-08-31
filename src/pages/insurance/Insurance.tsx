import { useState } from "react";
import { TopBar } from "../../components/Topbar";
import idea from "../../assets/icons/Idea.png";
import InsuranceCard from "../../components/Card/InsuranceCard";
import useUserStore from "../../store/UseUserStore";
import { useQuery } from "react-query";
import { getInsuranceDatas } from "../../api/insuranceAPI";

const Insurance = () => {
  const [isLeft, setIsLeft] = useState(true);
  const { petInfo, token } = useUserStore((state) => ({
    petInfo: state.petInfo,
    token: state.token,
  }));

  const {
    data: dummyDatas,
    error,
    isLoading,
  } = useQuery("insuranceDatas", () => getInsuranceDatas(token));

  interface IInsuranceCard {
    insuranceId: number;
    title: string;
    companyImage: string;
    price: string;
  }

  // Handle cases where data is not loaded or an error occurred
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // Ensure dummyDatas is an array before mapping
  const insuranceList = Array.isArray(dummyDatas) ? dummyDatas : [];

  return (
    <div className="h-full flex flex-col pt-6 px-4 bg-gray-0 ">
      <TopBar title={"펫 금융상품 알아보기"} skip={""} pre={"/"} />
      {/* 아롱이 */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[20px] font-semibold">{petInfo.petName}</h1>
          <span className="text-[14px] text-gray-400 ">
            {petInfo.petGender} | {petInfo.specie} | {petInfo.petBirth}
          </span>
        </div>
        <img
          src={petInfo.petImage}
          className="w-[78px] h-[78px] rounded-full object-cover"
        />
      </div>
      <div className="bg-gray-100 h-2 my-4"></div>
      {/* 가입 가능한 상품 */}
      <div>
        <h1 className="text-[18px] font-semibold mb-3">가입 가능한 상품</h1>

        <div className="cursor-pointer border-box flex h-[46px] items-center justify-center bg-gray-100 rounded-md gap-1 p-1">
          <div
            onClick={() => {
              setIsLeft(true);
            }}
            className={`w-[50%] h-[38px] ${
              isLeft ? "bg-gray-0" : "bg-gray-100"
            } flex justify-center items-center rounded-md`}
          >
            <span>갱신형</span>
          </div>
          <div
            onClick={() => {
              setIsLeft(false);
            }}
            className={`w-[50%] h-[38px] ${
              !isLeft ? "bg-gray-0" : "bg-gray-100"
            } flex justify-center items-center rounded-md`}
          >
            <div>재가입형</div>
          </div>
        </div>
      </div>

      {/* 갱신형 상품이란 */}
      {isLeft ? (
        <div className=" rounded-lg  border-2 border-gray-200 px-4 py-3 my-4 ">
          <div className="flex items-center mb-1">
            <img src={idea} className="w-4 h-4 mr-1" />
            <span className="text-[12px] font-semibold">갱신형 상품이란?</span>
          </div>
          <span className="font-semibold text-[12px] text-gray-500 ">
            한번 가입으로 오랜 기간 보장받아요. <br />
            단, 갱신주기마다 보험료가 변동될 수 있어요.
          </span>
        </div>
      ) : (
        <div className=" rounded-lg  border-2 border-gray-200 px-4 py-3 my-4 ">
          <div className="flex items-center mb-1">
            <img src={idea} className="w-4 h-4 mr-1" />
            <span className="text-[12px] font-semibold">
              재가입형 상품이란?
            </span>
          </div>
          <span className="font-semibold text-[12px] text-gray-500 ">
            만기(3년) 후 보장이 종료돼요. <br />
            보장을 계속 받으려면 재가입이 필요해요.
          </span>
        </div>
      )}

      {/* 리스트 */}
      <div className="flex-col overflow-y-auto">
        <ul>
          {/* <InsuranceCard
            companyImage={hanhwa}
            title="한화손해보험"
            price={"52000"}
            insuranceId={1}
          /> */}
          {insuranceList.map((data: IInsuranceCard, i: number) => (
            <InsuranceCard
              key={i}
              companyImage={data.companyImage}
              title={data.title}
              price={data.price}
              insuranceId={data.insuranceId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Insurance;
