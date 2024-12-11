import { MdChevronRight } from "react-icons/md";
import circle from "../../../assets/img/heoroBannerCircle.png";
import heroBg from "../../../assets/img/heroBannerBg.png";

const HeroBanner = () => {
  return (
    <div className="lg:mt-[100px]">
      <div className="relative max-w-screen-xl mx-auto">
        <div>
          <img src={heroBg} alt="" />
        </div>

        {/* text section */}
        <div className="absolute top-[10%] left-14 text-white font-jakarta">
          <div>
            <div className="flex flex-col space-y-5">
              <h4 className="text-[22px] font-semibold">One-stop platform</h4>
              <div className="relative">
                <h1 className="text-[44px] font-bold max-w-[634px]">
                  Postiz is an open-source tool for social media scheduling
                </h1>
                <div className="absolute top-0 -left-5">
                  <img src={circle} alt="" />
                </div>
              </div>
              <p className="text-[20px] max-w-[532px]">
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
