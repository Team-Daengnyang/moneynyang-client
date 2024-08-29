import useUserStore from "../../../store/UseUserStore";
import profile from "../../../assets/Main/profile.png";

export const MyPets = () => {
  const { petInfo } = useUserStore((state) => ({
    petInfo: state.petInfo,
  }));
  return (
    <div className="flex space-x-3">
      <div className="border border-gray-300 rounded-lg center text-center px-6 py-3 bg-[#F4F4F4] space-y-2">
        <div
          className="w-14 h-14 rounded-full"
          style={{
            backgroundImage: `url(${petInfo.petImage || profile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="space-y-1">
          <p className="text-sm font-medium">{petInfo.petName}</p>
          <p className="text-xs text-[#9FA4A9]">{petInfo.specie}</p>
        </div>
      </div>
      {/* 추가하기 버튼 */}
      <div className="border border-gray-300 rounded-lg center text-center px-6 py-5 bg-[#F4F4F4] space-y-2">
        <div
          className="w-14 h-14 rounded-full"
          style={{
            backgroundImage: "url('src/assets/Mypage/plus.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
          }}
        ></div>
        <p className="text-xs text-[#9FA4A9]">추가하기</p>
      </div>
    </div>
  );
};
