interface IFinishedGoal {
  title: string;
  goalAmount: number;
  date: string;
}

const FinishedGoalCard = ({ title, goalAmount, date }: IFinishedGoal) => {
  return (
    <div className="w-full h-[100px] px-4 py-4 border-[1px] border-gray-200  mb-2 rounded-lg flex flex-col gap-1">
      <h1 className="text-[14px] font-semibold ">{title}</h1>
      <h1 className="text-[14px] font-semibold text-gray-400">
        {goalAmount}원
      </h1>
      <h1 className="text-[14px] font-semibold text-gray-400">{date} 완료</h1>
    </div>
  );
};

export default FinishedGoalCard;
