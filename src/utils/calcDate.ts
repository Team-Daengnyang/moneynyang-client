import { format } from "date-fns";

export const increment = (currentDate: Date) => {
  const newDate = new Date(currentDate);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
};

export const decrement = (currentDate: Date) => {
  const newDate = new Date(currentDate);
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
};

export const getDate = (currentDate: Date) => {
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });
  return { year, month };
};

export const getRangeDate = (currentDate: Date) => {
  const startDate = format(
    new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    "yyyyMMdd"
  );
  const endDate = format(
    new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0),
    "yyyyMMdd"
  ); // 해당 월의 마지막 날

  return { startDate, endDate };
};

export const formatName = (bankName: string, accountNumber: string) => {
  const formattedBankName = `${bankName.slice(0, 2)}`;
  const formattedAccountNumber = `${accountNumber.slice(
    0,
    4
  )}-${accountNumber.slice(4, 8)}-${accountNumber.slice(
    8,
    12
  )}-${accountNumber.slice(12)}`;

  return { formattedBankName, formattedAccountNumber };
};

export const formatDate = (date: string, time: string) => {
  const formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(
    6
  )}`;
  const formattedTime = `${time.slice(0, 2)}:${time.slice(2, 4)}:${time.slice(
    4
  )}`;
  return { formattedDate, formattedTime };
};
