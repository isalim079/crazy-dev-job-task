import { MdChevronRight } from "react-icons/md";
import circle from "../../../assets/img/heoroBannerCircle.png";
import heroBg from "../../../assets/img/heroBannerBg.png";

const HeroBanner = () => {
  return (
    <div className="lg:mt-[100px] mt-[60px] px-6 lg:px-0">
      <div className="relative max-w-screen-xl mx-auto">
        <div>
          <img
            className="lg:w-fit lg:h-fit h-[440px]  object-cover"
            src={heroBg}
            alt=""
          />
        </div>

        {/* text section */}
        <div className="absolute top-[5%] lg:top-[10%]  px-6 lg:px-0 lg:left-14 text-white font-jakarta">
          <div>
            <div className="flex flex-col space-y-5">
              <h4 className="lg:text-[22px] font-semibold">
                One-stop platform
              </h4>
              <div className="relative">
                <h1 className="lg:text-[44px] text-[28px] font-bold max-w-[634px]">
                  Postiz is an open-source tool for social media scheduling
                </h1>
                <div className="absolute -top-1 lg:top-0 -left-5">
                  <img className="lg:w-fit w-[70%]" src={circle} alt="" />
                </div>
              </div>
              <p className="lg:text-[20px] max-w-[532px]">
                Provides tools to manage social media, build an audience,
                generate leads, and grow your business.
              </p>
            </div>
          </div>
          <div className="mt-7">
            <button className="bg-white text-black px-4 py-3 rounded-full flex items-center gap-1">
              Get Started{" "}
              <span className="flex items-center text-lg">
                <MdChevronRight /> <MdChevronRight className="-ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
