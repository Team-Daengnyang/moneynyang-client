import { TopBar } from "../../components/Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Chart } from "./Chart";
import { decrement, getDate, increment } from "../../utils/calcDate";
import { getDataDetail } from "../../api/accountAPI";
import useUserStore from "../../store/UseUserStore";

interface dataDetail {
  mostUsed: string;
  pet: number;
  petRate: number;
  food: number;
  foodRate: number;
  shopping: number;
  shoppingRate: number;
  transportation: number;
  transportationRate: number;
  others: number;
  othersRate: number;
  total: number;
  petPayCount: number;
  beforeExist: boolean;
  compareDiff: number;
}

export const AccountData = () => {
  const { token } = useUserStore((state) => ({
    token: state.token,
  }));
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { year, cleanedMonth } = getDate(currentDate);
  const yearMonth = `${year}-${cleanedMonth}`;
  const [data, setData] = useState<dataDetail>({
    mostUsed: "",
    pet: 0,
    petRate: 0,
    food: 0,
    foodRate: 0,
    shopping: 0,
    shoppingRate: 0,
    transportation: 0,
    transportationRate: 0,
    others: 0,
    othersRate: 0,
    total: 0,
    petPayCount: 0,
    beforeExist: false,
    compareDiff: 0,
  });

  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("");
  const [money, setMoney] = useState(0);

  const getInfo = async () => {
    const dataResponse = await getDataDetail(yearMonth, token);
    setData(dataResponse);

    if (dataResponse.compareDiff < 0) {
      setMsg("덜");
      setColor("text-main-color");
      setMoney(dataResponse.compareDiff * -1);
    } else {
      setMsg("더");
      setColor("text-red-500");
      setMoney(dataResponse.compareDiff);
    }
  };

  useEffect(() => {
    getInfo();
  }, [currentDate]);

  return (
    <div className="h-full pt-6 px-4 pb-10 bg-gray-0 overflow-y-auto">
      <TopBar pre={"/account"} title={""} skip={""} />
      <div className="space-y-5">
        {/* 월 선택 */}
        <div className="flex space-x-3 place-items-center">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-gray-400 text-lg"
            onClick={() => setCurrentDate(decrement(currentDate))}
          />
          <p className="font-medium">{`${year}년 ${cleanedMonth}월`}</p>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-gray-400 text-lg"
            onClick={() => setCurrentDate(increment(currentDate))}
          />
        </div>
        {/* 분석 */}
        <div className="mb-5">
          <p className="font-semibold text-[26px]">
            {Number(data.total).toLocaleString()}원
          </p>
        </div>
        {data.mostUsed && (
          <div className="border rounded-md p-3 text-sm text-gray-600">
            <p>
              <span className="text-main-color">{data.mostUsed}</span>에 가장
              많이 썼어요
            </p>
            <p>
              지난달보다{" "}
              <span className={`${color}`}>
                {money}원 {msg}
              </span>{" "}
              쓰는 중이에요
            </p>
          </div>
        )}
        {/* 차트 */}
        <div className="space-y-5">
          <Chart data={data} />
          {/*  */}
          <div className="space-y-3 px-3">
            <div className="flex justify-between place-items-center">
              <div className="flex space-x-5 place-items-center">
                <div className="rounded-full bg-main-color w-3 h-3"></div>
                <div>
                  <p className="font-semibold">반려</p>
                  <p className="font-medium text-gray-500">{data.petRate}%</p>
                </div>
              </div>
              <p className="font-semibold">
                {Number(data.pet).toLocaleString()}원
              </p>
            </div>
            {/*  */}
            <div className="flex justify-between place-items-center">
              <div className="flex space-x-5 place-items-center">
                <div className="rounded-full bg-[#5CC185] w-3 h-3"></div>
                <div>
                  <p className="font-semibold">쇼핑</p>
                  <p className="font-medium text-gray-500">
                    {data.shoppingRate}%
                  </p>
                </div>
              </div>
              <p className="font-semibold">
                {Number(data.shopping).toLocaleString()}원
              </p>
            </div>
            {/*  */}
            <div className="flex justify-between place-items-center">
              <div className="flex space-x-5 place-items-center">
                <div className="rounded-full bg-[#F8D36B] w-3 h-3"></div>
                <div>
                  <p className="font-semibold">교통</p>
                  <p className="font-medium text-gray-500">
                    {data.transportationRate}%
                  </p>
                </div>
              </div>
              <p className="font-semibold">
                {Number(data.transportation).toLocaleString()}원
              </p>
            </div>
            {/*  */}
            <div className="flex justify-between place-items-center">
              <div className="flex space-x-5 place-items-center">
                <div className="rounded-full bg-[#E3E5E7] w-3 h-3"></div>
                <div>
                  <p className="font-semibold">기타</p>
                  <p className="font-medium text-gray-500">
                    {data.othersRate}%
                  </p>
                </div>
              </div>
              <p className="font-semibold">
                {Number(data.others).toLocaleString()}원
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" bg-gray-100 h-2 w-full" />
        {/* 계좌 데이터 */}
        <div className="space-y-3">
          <p className="font-semibold">계좌 데이터</p>
          <div className="bg-gray-100 border rounded-md flex px-5 py-3 justify-between font-medium">
            <p className="text-gray-500">총 소비</p>
            <p>{Number(data.total).toLocaleString()}원</p>
          </div>
          <div className="bg-gray-100 border rounded-md flex px-5 py-3 justify-between font-medium">
            <p className="text-gray-500">반려 덕질 비용</p>
            <p>{Number(data.pet).toLocaleString()}원</p>
          </div>
          <div className="bg-gray-100 border rounded-md flex px-5 py-3 justify-between font-medium">
            <p className="text-gray-500">반려 덕질 결제 횟수</p>
            <p>{data.petPayCount}번</p>
          </div>
        </div>
      </div>
    </div>
  );
};
