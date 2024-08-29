import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";
import useSignupStore from "../../store/UseSignupStore";

interface inputPetInfo {
  petId: number;
  petName: string;
  petBirth: string;
  petType: string; // 강아지 고양이
  petGender: string; // 여아 남아
  specie: string;
  petImage: File;
}

interface SignupState {
  inputPetInfo: inputPetInfo;
  setInputPetInfo: (newInfo: Partial<inputPetInfo>) => void; // 부분적 업데이트를 허용
}

export const AnimalInfo = () => {
  const navigate = useNavigate();
  const { inputPetInfo, setInputPetInfo } = useSignupStore(
    (state: SignupState) => ({
      inputPetInfo: state.inputPetInfo,
      setInputPetInfo: state.setInputPetInfo,
    })
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputPetInfo({ [name]: value });
    // setPet((prev) => ({ ...prev, [name]: value })); // 상태 업데이트
  };
  const handleImageClick = () => {
    document.getElementById("file-input")?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setInputPetInfo({ petImage: file }); // 선택된 파일을 상태에 저장합니다.
      console.log("Selected file:", file);
    }
  };

  const signup = async () => {
    navigate("/signup/check");
  };

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
        <p className="text-xl font-semibold mb-5">
          우리 아이의 <br /> 정보를 알려주세요
        </p>
        <div className="space-y-5">
          {/* 이름 */}
          <div className="flex space-x-5">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/Signup/picture.png`}
              alt=""
              className="w-[78px] cursor-pointer"
              onClick={handleImageClick}
            />
            <input
              type="file"
              id="file-input"
              onChange={handleFileChange}
              style={{ display: "none" }} // input을 숨깁니다.
              accept="image/*" // 이미지 파일만 선택 가능하도록 설정
            />
            <div className="space-y-2 w-full">
              <label htmlFor="" className="block font-medium text-sm">
                이름 <span className="text-main-color">*</span>
              </label>
              <input
                type="text"
                name="petName"
                value={inputPetInfo.petName}
                onChange={handleChange} // 상태 업데이트
                placeholder="예) 춘삼이"
                className="border rounded-lg px-4 py-3 w-full text-sm"
              />
            </div>
          </div>
          {/* 성별 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              성별 <span className="text-main-color">*</span>
            </label>
            <div className="flex justify-between">
              <div
                className={`px-16 py-3 text-center rounded-lg font-medium text-sm ${
                  inputPetInfo.petGender === "여아"
                    ? "bg-[#DBEAFF] border border-main-color text-main-color"
                    : "bg-[#F4F4F4] text-[#73787E]"
                }`}
                onClick={() => setInputPetInfo({ petGender: "여아" })}
              >
                <p>여아</p>
              </div>
              <div
                className={`px-16 py-3 text-center rounded-lg font-medium text-sm ${
                  inputPetInfo.petGender === "남아"
                    ? "bg-[#DBEAFF] border border-main-color text-main-color"
                    : "bg-[#F4F4F4] text-[#73787E]"
                }`}
                onClick={() => setInputPetInfo({ petGender: "남아" })}
              >
                <p>남아</p>
              </div>
            </div>
          </div>
          {/* 생년월일 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              생년월일 <span className="text-[#9FA4A9]">(선택)</span>
            </label>
            <input
              type="text"
              name="petBirth"
              value={inputPetInfo.petBirth}
              onChange={handleChange} // 상태 업데이트
              placeholder="예) 240101"
              className="border rounded-lg px-4 py-3 w-full text-sm"
            />
          </div>
          {/* 성별 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              강아지/고양이 <span className="text-main-color">*</span>
            </label>
            <div className="flex justify-between">
              <div
                className={`px-[58px] py-3 text-center rounded-lg font-medium text-sm ${
                  inputPetInfo.petType === "강아지"
                    ? "bg-[#DBEAFF] border border-main-color text-main-color"
                    : "bg-[#F4F4F4] text-[#73787E]"
                }`}
                onClick={() => setInputPetInfo({ petType: "강아지" })}
              >
                <p>강아지</p>
              </div>
              <div
                className={`px-[58px] py-3 text-center rounded-lg font-medium text-sm ${
                  inputPetInfo.petType === "고양이"
                    ? "bg-[#DBEAFF] border border-main-color text-main-color"
                    : "bg-[#F4F4F4] text-[#73787E]"
                }`}
                onClick={() => setInputPetInfo({ petType: "고양이" })}
              >
                <p>고양이</p>
              </div>
            </div>
          </div>
          {/* 반려 동물 타입 */}
          <div className="space-y-2">
            <label htmlFor="" className="block font-medium text-sm">
              종류 <span className="text-[#9FA4A9]">(선택)</span>
            </label>
            <input
              type="text"
              name="specie"
              value={inputPetInfo.specie}
              onChange={handleChange} // 상태 업데이트
              placeholder="예) 말티즈"
              className="border rounded-lg px-4 py-3 w-full text-sm"
            />
          </div>
        </div>
      </div>
      <Button
        text={"다음"}
        onClick={() => {
          signup();
        }}
      ></Button>
    </div>
  );
};
