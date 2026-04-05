import Lottie from "lottie-react";
import cloudAnimation from "../../assets/cloud-ani.json";

export default function MainLottie() {
  const LottieComponent = Lottie.default || Lottie;

  return (
    <div className="w-lg h-lg mb-2">
      <LottieComponent
        animationData={cloudAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
