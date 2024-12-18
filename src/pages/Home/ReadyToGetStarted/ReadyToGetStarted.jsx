import { MdChevronRight } from "react-icons/md";
import postiz from "../../../assets/img/bottomPostiz.png";

const ReadyToGetStarted = () => {
  return (
    <div className="lg:pt-[120px] pt-[80px] bg-darkGrey px-6 lg:px-0">
      {/* title section */}
      <div className="text-white">
        <h1 className="font-jakarta text-[32px] lg:text-[60px] font-semibold text-center mb-3">
          Ready to get started?
        </h1>
        <p className="max-w-[538px] mx-auto text-center font-dmSans text-[18px] lg:text-[22px]">
          Elevate your social media planning and achieve new heights of
          efficiency and effectiveness with Postiz.
        </p>
        <div className="flex justify-center mt-5">
          <button className="bg-white text-black px-4 py-3 rounded-full flex items-center gap-1">
            Get Started{" "}
            <span className="flex items-center text-lg">
              <MdChevronRight /> <MdChevronRight className="-ml-3" />
            </span>
          </button>
        </div>
      </div>

      {/* image */}
      <div className="flex justify-center max-w-screen-xl mx-auto mt-[60px]">
        <img className="w-[70%]" src={postiz} alt="" />
      </div>
    </div>
  );
};

export default ReadyToGetStarted;
