import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";
import { useState } from "react";

interface petInfo {
  petName: String;
  petBirth: String;
  petType: number;
  spiece: String;
  inNeutering: Boolean;
  petSex: number;
}

export const AnimalInfo = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState(2);

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">
          반려 동물의 <br /> 정보를 알려주세요
        </p>
        <div className="space-y-5">
          {/* 이름 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium">
              이름 <span className="text-main-color">*</span>
            </label>
            <input
              type="text"
              placeholder="예) 춘삼이"
              className="border rounded-lg px-4 py-3 w-full"
            />
          </div>
          {/* 성별 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium">
              성별 <span className="text-main-color">*</span>
            </label>
            <div className="flex justify-between">
              <div
                className={`px-16 py-3 text-center rounded-lg font-medium text-sm ${
                  gender === 1
                    ? "bg-[#DBEAFF] border border-main-color text-main-color"
                    : "bg-[#F4F4F4] text-[#73787E]"
                }`}
                onClick={() => setGender(1)}
              >
                <p>여아</p>
              </div>
              <div
                className={`px-16 py-3 text-center rounded-lg font-medium text-sm ${
                  gender === 0
                    ? "bg-[#DBEAFF] border border-main-color text-main-color"
                    : "bg-[#F4F4F4] text-[#73787E]"
                }`}
                onClick={() => setGender(0)}
              >
                <p>남아</p>
              </div>
            </div>
          </div>
          {/* 몸무게 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium">
              몸무게 <span className="text-[#9FA4A9] text-sm">(선택)</span>
            </label>
            <div className="flex justify-between place-items-center space-x-3">
              <input
                type="text"
                className="border rounded-lg px-4 py-3 w-full"
              />
              <p className="text-[#73787E]">kg</p>
            </div>
          </div>
          {/* 생년월일 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium">
              생년월일 <span className="text-[#9FA4A9] text-sm">(선택)</span>
            </label>
            <input
              type="text"
              placeholder="예) 240101"
              className="border rounded-lg px-4 py-3 w-full"
            />
          </div>
          {/* 반려 동물 타입 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium">
              반려동물 타입{" "}
              <span className="text-[#9FA4A9] text-sm">(선택)</span>
            </label>
            <input
              type="text"
              placeholder="예) 말티즈"
              className="border rounded-lg px-4 py-3 w-full"
            />
          </div>
        </div>
      </div>
      <Button text={"다음"} link={"/animal_check"}></Button>
    </div>
  );
};
