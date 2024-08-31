import Lottie from "react-lottie";
import contrats from "../lotties/congrats.json";

const CongratsLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contrats,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // 이 설정을 유지하세요.
    },
  };

  return (
    <div
      style={{
        width: "100%",
        // position: "absolute",
        // bottom: "0",
        // right: "0",
      }}
    >
      {/* <Lottie options={defaultOptions} height={100} width={165} /> */}
      <Lottie options={defaultOptions} height={275} width={360} />
    </div>
  );
};

export default CongratsLottie;
