import React, { useEffect, useState } from "react";
import { TopBar } from "../../components/Topbar";
import sampleDog from "../../assets/images/sampleDog.jpg";
import idea from "../../assets/icons/Idea.png";
import InsuranceCard from "../../components/Card/InsuranceCard";
import hanhwa from "../../assets/images/hanhwa.png";
import useUserStore from "../../store/UseUserStore";
import { useQuery } from "react-query";
import { getInsuranceDatas } from "../../api/insuranceAPI";

const Insurance = () => {
  const [isLeft, setIsLeft] = useState(true);
  const { token } = useUserStore((state) => ({
    token: state.token,
  }));

  const { data } = useQuery("insuranceDatas", () => getInsuranceDatas(token));

  useEffect(() => {
    console.log(data);
  }, [data]);

  const dummyDatas = [
    {
      imgSrc: hanhwa,
      insuranceName: "한화손해보험",
      price: 55000,
      insuranceId: 1,
    },
    {
      imgSrc: hanhwa,
      insuranceName: "싸피보험",
      price: 40000,
      insuranceId: 2,
    },
    {
      imgSrc: hanhwa,
      insuranceName: "신한라이프",
      price: 76000,
      insuranceId: 3,
    },
    {
      imgSrc: hanhwa,
      insuranceName: "신한생명",
      price: 55000,
      insuranceId: 4,
    },
  ];

  return (
    <div className="h-full pt-6 px-4 bg-gray-0">
      <TopBar title={"펫 금융상품 알아보기"} skip={""} />
      {/* 아롱이 */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-[20px] font-semibold">아롱이</h1>
          <span className="text-[14px] text-gray-400 ">
            여아 | 말티즈 | 19.12.04
          </span>
        </div>
        <img
          src={sampleDog}
          className="w-[78px] h-[78px] rounded-full object-cover"
        />
      </div>
      <div className="bg-gray-100 h-2 my-4"></div>
      {/* 가입 가능한 상품 */}
      <div>
        <h1 className="text-[18px] font-semibold mb-3">가입 가능한 상품</h1>

        {isLeft ? (
          <div className="cursor-pointer flex h-[46px] items-center justify-center bg-gray-100 rounded-md gap-1 ">
            <div
              onClick={() => {
                setIsLeft(true);
              }}
              className="w-[158px] h-[38px] bg-gray-0 flex justify-center items-center rounded-md"
            >
              <span>갱신형</span>
            </div>
            <div
              onClick={() => {
                setIsLeft(false);
              }}
              className="w-[158px] h-[38px] bg-gray-100 flex justify-center items-center rounded-md"
            >
              <div>재가입형</div>
            </div>
          </div>
        ) : (
          <div className="cursor-pointer flex h-[46px] items-center justify-center bg-gray-100 rounded-md gap-1 ">
            <div
              onClick={() => {
                setIsLeft(true);
              }}
              className="w-[158px] h-[38px] bg-gray-100 flex justify-center items-center rounded-md"
            >
              <span>갱신형</span>
            </div>

            <div
              onClick={() => {
                setIsLeft(false);
              }}
              className="w-[158px] h-[38px] bg-gray-0 flex justify-center items-center rounded-md"
            >
              <div>재가입형</div>
            </div>
          </div>
        )}
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
      <ul>
        {/* <InsuranceCard
          imgSrc={hanhwa}
          insuranceName="한화손해보험"
          price={52000}
          insuranceId={1}
        />
        <InsuranceCard
          imgSrc={hanhwa}
          insuranceName="싸피보험"
          price={40000}
          insuranceId={2}
        />
        <InsuranceCard
          imgSrc={hanhwa}
          insuranceName="신한라이프"
          price={76000}
          insuranceId={3}
        />
        <InsuranceCard
          imgSrc={hanhwa}
          insuranceName="신한생명"
          price={55000}
          insuranceId={4}
        /> */}
        {dummyDatas.map((data, i) => {
          return (
            <InsuranceCard
              key={data.insuranceId}
              imgSrc={data.imgSrc}
              insuranceName={data.insuranceName}
              price={data.price}
              insuranceId={data.insuranceId}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Insurance;
