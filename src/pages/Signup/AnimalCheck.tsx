// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../../components/Topbar";
import { Button } from "../../components/Button";
import useUserStore from "../../store/UseUserStore";
import { registerPet, registerUser } from "../../api/userAPI";
import useSignupStore from "../../store/UseSignupStore";
import { useState } from "react";

interface inputUserInfo {
  email: string;
  password: string;
  name: string;
}

interface inputPetInfo {
  petId: number;
  petName: string;
  petBirth: string;
  petType: string; // 강아지 고양이
  petGender: string; // 여아 남아
  specie: string;
  petImage: File | null;
}

interface SignupState {
  inputUserInfo: inputUserInfo;
  inputPetInfo: inputPetInfo;
}

export const AnimalCheck = () => {
  const navigate = useNavigate();
  const setToken = useUserStore((state) => state.setToken);
  const { inputUserInfo, inputPetInfo } = useSignupStore(
    (state: SignupState) => ({
      inputUserInfo: state.inputUserInfo,
      inputPetInfo: state.inputPetInfo,
    })
  );
  const [error, setError] = useState("");

  const signup = async () => {
    try {
      // 유저 회원 가입 요청
      const userResponse = await registerUser(inputUserInfo);
      setToken(userResponse);

      await registerPet(inputPetInfo, userResponse);
      navigate("/signup/success", { replace: true });
    } catch (error) {
      console.error("회원 가입 실패:", error);
      setError("회원 가입 실패");
    }
  };

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar pre={"/signup/animal"} title={""} skip={""} />
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xl font-semibold">
              아이의 정보가 알맞는지 <br /> 확인해 주세요
            </p>
            <p className="text-main-color font-medium text-sm">
              수정하고 싶다면 뒤로가기를 눌러주세요
            </p>
          </div>
          <div className="bg-[#F4F4F4] p-5 rounded-lg place-items-center space-y-3">
            <p className="font-semibold">{inputPetInfo.petName}</p>
            <table className="text-sm text-left border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <th className="text-[#9FA4A9] font-medium">성별</th>
                  <td className="px-5">{inputPetInfo.petGender}</td>
                </tr>
                <tr>
                  <th className="text-[#9FA4A9] font-medium">강아지/고양이</th>
                  <td className="px-5">{inputPetInfo.petType}</td>
                </tr>
                <tr>
                  <th className="text-[#9FA4A9] font-medium">생년월일</th>
                  <td className="px-5">{inputPetInfo.petBirth}</td>
                </tr>
                <tr>
                  <th className="text-[#9FA4A9] font-medium">반려동물 타입</th>
                  <td className="px-5">{inputPetInfo.specie}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex flex-col place-content-center text-center">
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button
          text={"가입하기"}
          onClick={() => {
            signup();
          }}
        />
      </div>
    </div>
  );
};
