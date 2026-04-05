import ProfileImg from "../../assets/profileImg.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { Copy } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white py-20 px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-5 gap-24 items-center">
        <div className="lg:col-span-2 flex justify-center">
          <img
            src={ProfileImg}
            alt="Profile"
            className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-none object-cover border-2 rounded-2xl bg-mainbg border-mainbg shadow-lg"
          />
        </div>

        <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-2xl md:text-3xl leading-snug md:leading-relaxed break-keep">
            천천히 꾸준히 성장하는 개발자 <br className="md:hidden" />
            <b className="text-blue-600">이한음</b>입니다.
          </p>

          <div className="mt-8 text-lg md:text-xl text-gray-600 space-y-1">
            <p>사용자 경험을 최우선으로 생각하고</p>
            <p>이탈율을 줄이기 위해 노력합니다.</p>
          </div>

          <div className="flex flex-row items-center gap-4 mt-6 pt-8 text-[20px]">
            <p className=" text-blue-500 font-medium">dev.haneum@gmail.com</p>
            <CopyToClipboard
              text="dev.haneum@gmail.com"
              onCopy={() =>
                toast.success("이메일 주소가 복사되었습니다!", {
                  duration: 2000,
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                })
              }
            >
              <button className="transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer">
                <Copy size={20} className="text-blue-500" />
              </button>
            </CopyToClipboard>
          </div>

          <div className="flex flex-row items-center gap-8 mt-10">
            <a
              href="https://github.com/Gukbo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://velog.io/@mebung2/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-blue-600 transition-colors"
            >
              Velog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
