import { useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "../../components/Topbar";
import diary from "../../assets/images/diary.png";
import { useState } from "react";
import { writeDiary } from "../../api/cashwalkAPI";
import { useMutation } from "react-query";
import useUserStore from "../../store/UseUserStore";

interface IState {
  year: number;
  month: number;
  day: number;
  date: Date;
  activeStartDate: string;
}

const Write: React.FC = () => {
  const location = useLocation();
  const { year, month, day /* activeStartDate */ } =
    (location.state as IState) || {};
  const [typedText, setTypedText] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const { token } = useUserStore((state) => ({
    token: state.token,
  }));

  const mutation = useMutation(
    () =>
      writeDiary(
        token,
        typedText,
        `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
          2,
          "0"
        )}`,
        selectedFile
      ),
    {
      onSuccess: () => {
        navigate("/cashwalk/calendar");
      },
      onError: (error) => {
        console.error("Error adding diary entry:", error);
      },
      onSettled: () => {
        console.log("Mutation has settled");
      },
      retry: 2,
      retryDelay: 1000,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="h-full pt-6 px-4 bg-gray-0">
      <TopBar pre={"/cashwalk/calendar"} skip={""} title={"일지 기록"} />
      <div className="flex gap-1 items-center">
        <img src={diary} className="w-[28px]" />
        <h1 className="text-gray-700 text-[16px] font-semibold">
          {String(month).padStart(2, "0")}월 {String(day).padStart(2, "0")}일의
          일지
        </h1>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setTypedText(e.target.value)}
          placeholder="우리 아이와의 산책 일지를 작성해 보세요"
          className="bg-gray-100 my-2 p-4 h-[200px] resize-none border border-gray-200 rounded-lg"
          value={typedText}
          required
        ></textarea>
        <input type="file" onChange={handleFileChange} />
        <button
          type="submit"
          className={`w-full rounded-lg h-[56px] ${
            typedText
              ? "bg-blue-100 text-gray-0"
              : "bg-gray-300 text-gray-0 cursor-not-allowed"
          }`}
          disabled={!typedText}
        >
          작성 완료
        </button>
      </form>
    </div>
  );
};

export default Write;
