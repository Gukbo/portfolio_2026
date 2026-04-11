import portbg from "../../assets/port_bg.png";
import MainLottie from "./MainLottie";

export default function Welcome() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-mainbg flex flex-col items-center justify-center">
      <img
        src={portbg}
        alt="floating cloud"
        className="absolute inset-0 w-full h-full object-cover z-0 animate-cloud-float scale-110 pointer-events-none"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <MainLottie />

        <h1 className="font-extrabold text-[32px] sm:text-[46px] md:text-[68px] text-white text-shadow-md leading-tight">
          Poco a poco se va lejos
        </h1>

        <div className="flex flex-row items-baseline justify-center gap-4 text-shadow-md text-white font-bold mt-4 text-[clamp(1.5rem,5vw,2.5rem)]">
          <p className="">이 한 음</p>
          <p className="">(FE Developer)</p>
        </div>
      </div>
    </div>
  );
}
