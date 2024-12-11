/* eslint-disable react/no-unescaped-entities */
import { MdChevronRight } from "react-icons/md";
import img from "../../../assets/img/line.png";

const HeroTitle = () => {
  return (
    <div className="font-jakarta">
      <div>
        <h1 className="text-center max-w-[800px] mx-auto text-white text-[70px] font-semibold leading-[80px]">
          Postiz and Buffer comparison
        </h1>
      </div>

      {/* line */}
      <div className="max-w-[420px] mx-auto my-5">
        <div className="flex justify-end">
          <img src={img} alt="" />
        </div>
      </div>

      {/* subtitle */}
      <div>
        <p className="text-center max-w-[700px] mx-auto text-white font-dmSans text-[20px]">
          Postiz's superior scheduling flow, competitor tracking, and client
          management make it the best Buffer alternative.
        </p>
      </div>

      {/* button */}
      <div className="flex justify-center mt-7">
        <button className="bg-white px-4 py-3 rounded-full flex items-center gap-1">
          Get Started{" "}
          <span className="flex items-center text-lg">
            <MdChevronRight /> <MdChevronRight className="-ml-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroTitle;
