import portbg from "../../assets/port_bg.png";

export default function Welcome() {
  return (
    <div
      style={{ backgroundImage: `url(${portbg})` }}
      className="relative flex flex-col items-center justify-center w-full h-screen bg-mainbg bg-cover bg-center"
    >
      <div>
        <h1 className="font-extrabold text-[64px] text-white text-shadow-md">
          Poco a poco se va lejos
        </h1>
        <div className="relative z-10 flex flex-row items-baseline justify-center gap-4 text-shadow-md text-white font-bold">
          <p className=" text-[40px] ">이 한 음 </p>
          <p className="text-[32px]">(FE Developer) </p>
        </div>
      </div>
    </div>
  );
}
