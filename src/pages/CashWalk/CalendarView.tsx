import { useEffect, useState } from "react";
import { TopBar } from "../../components/Topbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import diary from "../../assets/images/diary.png";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/UseUserStore";
import { useQuery } from "react-query";
import { getMonthDiary } from "../../api/cashwalkAPI";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarView = () => {
  const today = new Date();
  const [date, setDate] = useState<Value>(today);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [day, setDay] = useState(today.getDate());
  const [activeStartDate, setActiveStartDate] = useState<Date | null>(
    new Date()
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [selectedDiaryContent, setSelectedDiaryContent] = useState<
    string | null
  >(null);

  const { token } = useUserStore((state) => ({
    token: state.token,
  }));

  const navigate = useNavigate();

  const { data: attendDay } = useQuery(
    ["monthDiaryDatas", activeStartDate],
    () => getMonthDiary(token, moment(activeStartDate).format("YYYY-MM-01")),
    {
      enabled: !!activeStartDate,
      initialData: [],
    }
  );

  useEffect(() => {
    if (activeStartDate) {
      const firstDayOfMonth = moment(activeStartDate).format("YYYY-MM-01");
      console.log("First day of the current month:", firstDayOfMonth);
    }
  }, [activeStartDate]);

  const handleDateChange = (newDate: Value) => {
    setDate(newDate);

    const selectedDate = newDate instanceof Array ? newDate[0] : newDate;

    if (selectedDate instanceof Date) {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;
      const day = selectedDate.getDate();

      setYear(year);
      setMonth(month);
      setDay(day);

      console.log(moment(selectedDate).format("YYYY-MM-DD"));

      // Disable the button for all dates except today
      if (selectedDate.toDateString() !== today.toDateString()) {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }

      const selectedDay = attendDay?.find(
        (x: { date: string; diaryContent: string }) =>
          x.date === moment(selectedDate).format("YYYY-MM-DD")
      );
      if (selectedDay) {
        setSelectedDiaryContent(selectedDay.diaryContent);
      } else {
        setSelectedDiaryContent(null);
      }
    }
  };

  return (
    <div className="h-full pt-6 px-4 bg-gray-0">
      <TopBar pre={"/cashwalk"} skip={""} title={""} />
      <div className="w-full flex justify-center relative">
        <Calendar
          value={date}
          onChange={handleDateChange}
          formatDay={(_locale, date) => moment(date).format("D")}
          formatYear={(_locale, date) => moment(date).format("YYYY")}
          formatMonthYear={(_locale, date) => moment(date).format("YYYY. MM")}
          calendarType="gregory"
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          minDetail="month"
          maxDetail="month"
          className="w-full border-none rounded-lg bg-white"
          activeStartDate={
            activeStartDate === null ? undefined : activeStartDate
          }
          onActiveStartDateChange={({ activeStartDate }) => {
            setActiveStartDate(activeStartDate);

            if (activeStartDate) {
              const firstDayOfMonth =
                moment(activeStartDate).format("YYYY-MM-01");
              console.log("First day of the new month:", firstDayOfMonth);
            }
          }}
          tileContent={({ date, view }) => {
            let html = [];
            if (
              view === "month" &&
              attendDay?.find(
                (x: { date: string; diaryContent: string }) =>
                  x.date === moment(date).format("YYYY-MM-DD")
              )
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
              if (moment(date).isSame(today, "day")) {
                classes.push("bg-[#cae3fceb] text-black font-medium");
              }

              if (
                attendDay?.some(
                  (x: { date: string; diaryContent: string }) =>
                    x.date === moment(date).format("YYYY-MM-DD")
                )
              ) {
                classes.push("relative");
              }

              classes.push("h-12 text-gray-700 font-medium");
            }

            return classes.join(" ");
          }}
        />
      </div>
      <div className="h-2 bg-gray-100 my-5" />
      <div className="">
        <div className="flex gap-1 mb-[7px]">
          <img src={diary} className="w-[28px]" />
          <h1 className="text-gray-700 text-[16px] font-semibold">
            {selectedDiaryContent
              ? `${month}월 ${day}일의 일지`
              : "일지를 선택해주세요"}
          </h1>
        </div>

        {selectedDiaryContent ? (
          <div className="p-4 bg-gray-100 text-gray-600 text-[14px] font-semibold rounded-lg">
            <span>{selectedDiaryContent}</span>
          </div>
        ) : (
          <div className="flex bg-gray-100 rounded-lg justify-between h-[68px] items-center p-4">
            <h1>아직 작성한 일지가 없어요</h1>
            <button
              onClick={() => {
                navigate("/cashwalk/write", {
                  state: { year, month, day, date, activeStartDate },
                });
              }}
              className={`w-[81px] h-[36px] rounded-full text-gray-0 ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-100"
              }`}
              disabled={isButtonDisabled}
            >
              기록하기
            </button>
          </div>
        )}
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
            background-color: #97c5fd !important; /* blue-100 */
          }
        `}
      </style>
    </div>
  );
};

export default CalendarView;
