import { useState } from "react";
import { TopBar } from "../../components/Topbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarView = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const [activeStartDate, setActiveStartDate] = useState<Date | null>(
    new Date()
  );
  const attendDay = ["2024-08-03", "2024-08-20"]; // 출석한 날짜 예시

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
    console.log(newDate);
  };

  return (
    <div className="h-full pt-6 px-4 bg-gray-0">
      <TopBar skip={""} title={""} />
      {/* 캘린더 */}
      <div className="w-full flex justify-center relative">
        <Calendar
          value={date}
          onChange={handleDateChange}
          formatDay={(locale, date) => moment(date).format("D")}
          formatYear={(locale, date) => moment(date).format("YYYY")}
          formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
          calendarType="gregory"
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          minDetail="month" // 최소 디테일을 "month"로 설정
          maxDetail="month" // 최대 디테일을 "month"로 설정
          className="w-full border-none rounded-lg bg-white"
          activeStartDate={
            activeStartDate === null ? undefined : activeStartDate
          }
          onActiveStartDateChange={({ activeStartDate }) =>
            setActiveStartDate(activeStartDate)
          }
          tileContent={({ date, view }) => {
            let html = [];
            if (
              view === "month" &&
              attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))
            ) {
              html.push(
                <div
                  key={moment(date).format("YYYY-MM-DD")}
                  className="bg-blue-500 rounded-full w-[5px] h-[5px] absolute top-[85%] left-1/2 transform -translate-x-1/2"
                />
              );
            }
            return <>{html}</>;
          }}
          tileClassName={({ date, view }) => {
            const classes = [];

            if (view === "month") {
              // 오늘 날짜의 스타일 지정
              if (moment(date).isSame(today, "day")) {
                classes.push("bg-blue-50 text-black font-medium");
              }

              // 출석한 날짜의 스타일 지정
              if (attendDay.includes(moment(date).format("YYYY-MM-DD"))) {
                classes.push("relative");
              }

              // 모든 날짜 타일에 공통으로 높이와 스타일 지정
              classes.push("h-12 text-gray-700 font-medium");
            }

            return classes.join(" ");
          }}
        />
      </div>
      {/* 스타일 수정 및 추가를 위한 Tailwind CSS */}
      <style>
        {`
          .react-calendar__month-view__weekdays__weekday abbr {
            text-decoration: none !important;
            font-weight: 600 !important; /* semibold */
            color: #9CA3AF !important; /* gray-400 */
          }
          .react-calendar__tile--active {
            background-color: transparent !important;
          }
          .react-calendar__tile--active abbr {
            background-color: #CACDD2;
            border-radius: 50%;
            display: inline-block;
            width: 28px;
            height: 28px;
            line-height: 28px;
            text-align: center;
          }
          .react-calendar__navigation__label {
            background-color: transparent !important; /* 배경색 제거 */
            font-weight: 600 !important; /* semibold */
          }
          .react-calendar__navigation__label:focus, 
          .react-calendar__navigation__label:active {
            background-color: transparent !important; /* 포커스 시 배경색 제거 */
          }
            .react-calendar__tile--now:hover {
            background-color: #bfdbfe !important; /* blue-100 */
          }
        `}
      </style>
    </div>
  );
};

export default CalendarView;
