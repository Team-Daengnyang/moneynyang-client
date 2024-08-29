import { formatDate } from "../../utils/calcDate";

interface accountInfo {
  transactionUniqueNo: number;
  transactionDate: string;
  transactionTime: string;
  transactionBalance: number;
  transactionAfterBalance: number;
  transactionSummary: string; // 입금 출금
}

export const AccountInfoCard = (props: accountInfo) => {
  const { formattedDate, formattedTime } = formatDate(
    props.transactionDate,
    props.transactionTime
  );

  return (
    <div className=" border-b border-gray-100 space-y-3 py-5">
      <p className="font-medium text-gray-500 text-xs">
        {formattedDate} <span className="text-gray-400">{formattedTime}</span>
      </p>
      <div className="flex justify-between">
        <p className="font-medium text-lg">최승빈</p>
        <div className="text-right space-y-1">
          <p className="text-lg text-main-color font-semibold">
            {props.transactionSummary === "입금" ? "+" : "-"}
            {Number(props.transactionBalance).toLocaleString()}원
          </p>
          <p className="text-gray-500 font-medium">
            잔액 {Number(props.transactionAfterBalance).toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
};
