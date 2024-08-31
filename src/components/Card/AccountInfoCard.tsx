import { formatDate } from "../../utils/calcDate";

interface accountInfo {
  transactionUniqueNo: number;
  transactionDate: string;
  transactionTime: string;
  transactionBalance: number;
  transactionAfterBalance: number;
  transactionSummary: string; // 입금 출금
  transactionMemo: string;
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
        {props.transactionMemo === "투자계좌" ? (
          <p className="font-medium text-lg">
            {props.transactionMemo} {props.transactionSummary}
          </p>
        ) : (
          <p className="font-medium text-lg">{props.transactionMemo}</p>
        )}
        <div className="text-right space-y-1">
          {props.transactionSummary === "입금" ? (
            <p className="text-lg text-red-500  font-semibold">
              +{Number(props.transactionBalance).toLocaleString()}원
            </p>
          ) : (
            <p className="text-lg text-main-color font-semibold">
              -{Number(props.transactionBalance).toLocaleString()}원
            </p>
          )}
          <p className="text-gray-500 font-medium">
            잔액 {Number(props.transactionAfterBalance).toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
};
