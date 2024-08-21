export const Login = () => {
  return (
    <div className="h-full flex flex-col justify-center pt-6 px-4 bg-main-color text-center">
      <div className="space-y-5 mb-20">
        <div className="flex place-content-center">
          <img src="src/assets/Login/loginLogo.png" alt="" width={165} />
        </div>
        <p className="text-white">반려동물과 함께하는 금융 서비스</p>
      </div>
      <div className="flex place-content-center">
        <img src="src/assets/Login/loginImg.png" alt="" className="w-full" />
      </div>
      <div className="flex-col place-content-center space-y-3">
        <div className="w-full rounded-md bg-[#FEE500] text-center py-5 flex place-content-center space-x-3">
          <img src="src/assets/Login/kakao.png" alt="" className="w-4" />
          <p className=" font-medium">카카오로 로그인</p>
        </div>
        <div className="w-full rounded-md bg-[#03C75A] text-center py-5 flex place-content-center space-x-3">
          <img src="src/assets/Login/naver.png" alt="" className="w-4" />
          <p className="font-medium text-white">네이버로 로그인</p>
        </div>
      </div>
    </div>
  );
};
