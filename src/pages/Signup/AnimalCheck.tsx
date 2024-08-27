// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../../components/Topbar";
import axios from "axios";
import useUserStore from "../../store/UseUserStore";
import { Button } from "../../components/Button";

export const AnimalCheck = () => {
  const navigate = useNavigate();
  const { setToken, inputUserInfo, petInfo } = useUserStore();

  const signup = async () => {
    try {
      // 유저 회원 가입 요청
      const userResponse = await axios.post(
        `https://moneynyang.site/api/v1/members`,
        {
          email: inputUserInfo.email,
          password: inputUserInfo.password,
          name: inputUserInfo.name,
        }
      );
      console.log(userResponse.data.data.accessToken);
      setToken(userResponse.data.data.accessToken);

      // 반려동물 정보 저장 요청
      await axios.post(
        `https://moneynyang.site/api/v1/pets`,
        {
          petName: petInfo.petName,
          petBirth: petInfo.petBirth,
          petType: petInfo.petType,
          petGender: petInfo.petGender,
          specie: petInfo.specie,
          // petImage: petInfo.petImage,
        },
        {
          headers: {
            Authorization: `Bearer ${userResponse.data.data.accessToken}`,
          },
        }
      );
      navigate("/signup/success", { replace: true });
    } catch (error) {
      console.error("회원 가입 실패:", error);
    }
  };

  return (
    <div className="h-full pt-6 px-4 bg-white flex flex-col justify-between">
      <div>
        <TopBar title={""} skip={""} />
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
            <p className="font-semibold">{petInfo.petName}</p>
            <table className="text-sm text-left border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <th className="text-[#9FA4A9] font-medium">성별</th>
                  <td className="px-5">{petInfo.petGender}</td>
                </tr>
                <tr>
                  <th className="text-[#9FA4A9] font-medium">강아지/고양이</th>
                  <td className="px-5">{petInfo.petType}</td>
                </tr>
                <tr>
                  <th className="text-[#9FA4A9] font-medium">생년월일</th>
                  <td className="px-5">{petInfo.petBirth}</td>
                </tr>
                <tr>
                  <th className="text-[#9FA4A9] font-medium">반려동물 타입</th>
                  <td className="px-5">{petInfo.specie}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Button
        text={"가입하기"}
        onClick={() => {
          signup();
        }}
      />
    </div>
  );
};
