import line from "../../../assets/img/postizLine.png";
import doodle from "../../../assets/img/Doodle.png";
import { MdChevronRight } from "react-icons/md";

const ChoosePostiz = () => {
  return (
    <div className="lg:py-[180px] py-[80px] max-w-screen-xl mx-auto px-6 lg:px-0">
      <div className="bg-[#3C1AC9] rounded-2xl p-6 lg:p-[60px] grid grid-cols-6">
        {/* column 1 */}
        <div className="lg:col-span-4 col-span-6 text-white">
          <h1 className="font-jakarta text-[32px] lg:text-[48px] font-semibold mb-5 lg:mb-[32px]">
            Choose{" "}
            <span className="relative text-[#F471FF]">
              <span>Postiz</span>
              <span className="absolute inset-0 top-10 lg:top-14">
                <img src={line} alt="" />
              </span>
            </span>{" "}
            to enhance your social media approach!
          </h1>
          <p className="font-dmSans lg:text-[20px]">
            Easily design, schedule, and optimize captivating content for all
            your channels.
          </p>
        </div>

        {/* column 2 */}
        <div className="lg:col-span-2 col-span-6 flex mt-5 lg:mt-0 justify-center items-center lg:gap-6 lg:justify-end">
          <div>
            <img className="lg:w-fit w-[60%]" src={doodle} alt="" />
          </div>
          <div>
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

export default ChoosePostiz;
