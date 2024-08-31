import Lottie from "react-lottie";
import logindog from "../lotties/congrats.json";

const HomeLottie2 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logindog,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // 이 설정을 유지하세요.
    },
  };

  return (
    <div
      style={{
        width: "160px",
        position: "absolute",
        bottom: "0",
        right: "0",
      }}
    >
      {/* <Lottie options={defaultOptions} height={100} width={165} /> */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default HomeLottie2;
