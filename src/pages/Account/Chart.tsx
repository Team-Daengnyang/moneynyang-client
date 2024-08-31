interface IState {
  data: dataDetail;
}

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

export const Chart = (data: IState) => {
  const petRate = data.data.petRate || 1; // 기본값 설정
  const shoppingRate = data.data.shoppingRate || 1;
  const transportationRate = data.data.transportationRate || 1;
  const othersRate = data.data.othersRate || 1;

  return (
    <div className="flex w-full h-6 space-x-[2px]">
      <div
        className="bg-main-color rounded-l-lg"
        style={{ width: `${petRate}%` }}
      ></div>
      <div className="bg-[#5CC185]" style={{ width: `${shoppingRate}%` }}></div>
      <div
        className="bg-[#F8D36B]"
        style={{ width: `${transportationRate}%` }}
      ></div>
      <div
        className="bg-[#E3E5E7] rounded-r-lg"
        style={{ width: `${othersRate}%` }}
      ></div>
    </div>
  );
};
