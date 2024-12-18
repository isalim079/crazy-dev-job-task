import postizLogo from "../../../assets/img/postiz.png";
import bufferLogo from "../../../assets/img/bufferLogo.png";

const PlatformComparison = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] px-6 lg:px-0">
      <div className="max-w-screen-xl mx-auto">
        {/* title */}
        <div className="mb-5 lg:mb-[40px]">
          <h1 className="text-center font-jakarta text-[30px] lg:text-[48px] font-semibold text-white">
            Platform Comparison
          </h1>
        </div>

        {/* card section */}
        <div className="flex lg:flex-row gap-3 flex-col items-center relative">
          {/* 1st card */}
          <div className="px-6 py-10 lg:p-[80px] rounded-2xl bg-gradient-to-r from-[#5608D5] to-[#24005E]">
            <div className="mb-3 lg:mb-6">
              <div>
                <img className="lg:w-fit w-[50%]"  src={postizLogo} alt="" />
              </div>
            </div>

            {/* text section */}
            <div className="font-dmSans text-white">
              <h4 className="lg:mb-3 mb-2 text-[22px] lg:text-[34px] font-semibold">Postiz</h4>
              <p className="lg:text-[22px]">
                Postiz helps you build an audience organically. We’re a
                values-driven company that provides affordable, intuitive,
                marketing tools for ambitious people and teams.
              </p>
            </div>
          </div>
          {/* 2nd card */}
          <div className="px-6 py-10 lg:p-[80px] rounded-2xl bg-[#1A1919] h-full">
            <div className="mb-3 lg:mb-6">
              <div>
                <img className="lg:w-fit w-[50%]" src={bufferLogo} alt="" />
              </div>
            </div>

            {/* text section */}
            <div className="font-dmSans text-white">
              <h4 className="lg:mb-3 mb-2 text-[22px] lg:text-[34px] font-semibold">Buffer</h4>
              <p className="lg:text-[22px]">
                Buffer helps you build an audience organically. We’re a
                values-driven company that provides affordable, intuitive,
                marketing tools for ambitious people and teams.
              </p>
            </div>
          </div>

          {/* vs */}
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="bg-black px-3 py-2 text-white font-dmSans text-[20px] rounded-lg">
              VS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformComparison;
