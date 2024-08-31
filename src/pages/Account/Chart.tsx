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
  const pet = data.data.petRate ? `w-[${data.data.petRate}%]` : "w-1";
  const shopping = data.data.shoppingRate
    ? `w-[${data.data.shopping}%]`
    : "w-1";
  const transportation = data.data.transportationRate
    ? `w-[${data.data.transportation}%]`
    : "w-1";
  const others = data.data.othersRate ? `w-[${data.data.others}%]` : "w-1";

  return (
    <div className="flex w-full h-6 space-x-[2px]">
      <div className={`bg-main-color rounded-l-lg ${pet}`}></div>
      <div className={`bg-[#5CC185] ${shopping}`}></div>
      <div className={`bg-[#F8D36B]  ${transportation}`}></div>
      <div className={`bg-[#E3E5E7] rounded-r-lg ${others}`}></div>
    </div>
  );
};
