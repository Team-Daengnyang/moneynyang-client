import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TopBar } from "../../components/Topbar";
import { useEffect, useState } from "react";
import trash from "../../assets/Signup/trash-bg.png";
import picture from "../../assets/Signup/picture.png";
import useUserStore from "../../store/UseUserStore";
import { updatePet } from "../../api/userAPI";

interface inputPetInfo {
  petId: number;
  petName: string;
  petBirth: string;
  petType: string; // 강아지 고양이
  petGender: string; // 여아 남아
  specie: string;
  petImage: File | null;
}

export const UpdateAnimalInfo = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const { petInfo, token } = useUserStore((state) => ({
    petInfo: state.petInfo,
    token: state.token,
  }));

  const [inputPetInfo, setInputPetInfo] = useState<inputPetInfo>({
    petId: petInfo.petId,
    petName: petInfo.petName,
    petBirth: petInfo.petBirth,
    petType: petInfo.petType,
    petGender: petInfo.petGender,
    specie: petInfo.specie,
    petImage: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputPetInfo((prev) => ({ ...prev, [name]: value })); // 이전 상태를 유지하면서 업데이트
  };

  const handleImageClick = () => {
    document.getElementById("file-input")?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setInputPetInfo((prev) => ({ ...prev, petImage: file })); // 선택된 파일을 상태에 저장합니다.
      console.log("Selected file:", file);

      // FileReader를 사용하여 이미지 URL 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string); // 이미지 URL을 상태에 저장
      };
      reader.readAsDataURL(file); // 파일을 Data URL로 읽기
    }
  };

  const update = async () => {
    await updatePet(inputPetInfo, token);
    navigate("/mypage", { replace: true });
  };

  useEffect(() => {
    if (petInfo.petImage) {
      setImageSrc(petInfo.petImage);
      console.log(imageSrc);
    }
  }, []);

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar pre={"/mypage"} title={"우리 아이 정보 수정하기"} skip={""} />
        <div className="space-y-5">
          {/* 이름 */}
          <div className="flex space-x-5 justify-between">
            <div className="relative">
              <img
                src={imageSrc || picture}
                alt=""
                className={`w-[78px] h-[78px] object-cover border rounded-full ${
                  !imageSrc ? "cursor-pointer" : ""
                }`}
                onClick={!imageSrc ? handleImageClick : undefined}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              {!imageSrc ? (
                ""
              ) : (
                <img
                  src={trash}
                  alt=""
                  className="absolute bottom-0 right-0 w-7 cursor-pointer"
                  onClick={() => setImageSrc(null)}
                />
              )}
            </div>
            <input
              type="file"
              id="file-input"
              onChange={handleFileChange}
              style={{ display: "none" }} // input을 숨깁니다.
              accept="image/*" // 이미지 파일만 선택 가능하도록 설정
            />
            <div className="space-y-2">
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
                onClick={() => {
                  setInputPetInfo((prev) => ({ ...prev, petGender: "여아" }));
                }}
              >
                <p>여아</p>
              </div>
              <div
                className={`px-16 py-3 text-center rounded-lg font-medium text-sm ${
                  inputPetInfo.petGender === "남아"
                    ? "bg-[#DBEAFF] border border-main-color text-main-color"
                    : "bg-[#F4F4F4] text-[#73787E]"
                }`}
                onClick={() => {
                  setInputPetInfo((prev) => ({ ...prev, petGender: "남아" }));
                }}
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
                onClick={() => {
                  setInputPetInfo((prev) => ({ ...prev, petType: "강아지" }));
                }}
              >
                <p>강아지</p>
              </div>
              <div
                className={`px-[58px] py-3 text-center rounded-lg font-medium text-sm ${
                  inputPetInfo.petType === "고양이"
                    ? "bg-[#DBEAFF] border border-main-color text-main-color"
                    : "bg-[#F4F4F4] text-[#73787E]"
                }`}
                onClick={() => {
                  setInputPetInfo((prev) => ({ ...prev, petType: "고양이" }));
                }}
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
          update();
        }}
      ></Button>
    </div>
  );
};
