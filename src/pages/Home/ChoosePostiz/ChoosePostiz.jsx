import line from "../../../assets/img/postizLine.png";
import doodle from "../../../assets/img/Doodle.png";
import { MdChevronRight } from "react-icons/md";

const ChoosePostiz = () => {
  return (
    <div className="py-[180px] max-w-screen-xl mx-auto">
      <div className="bg-[#3C1AC9] rounded-2xl p-[60px] grid grid-cols-6">
        {/* column 1 */}
        <div className="col-span-4 text-white">
          <h1 className="font-jakarta text-[48px] font-semibold mb-[32px]">
            Choose{" "}
            <span className="relative text-[#F471FF]">
              <span>Postiz</span>
              <span className="absolute inset-0 top-14">
                <img src={line} alt="" />
              </span>
            </span>{" "}
            to enhance your social media approach!
          </h1>
          <p className="font-dmSans text-[20px]">
            Easily design, schedule, and optimize captivating content for all
            your channels.
          </p>
        </div>

        {/* column 2 */}
        <div className="col-span-2 flex items-center gap-6 justify-end">
          <div>
            <img src={doodle} alt="" />
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
