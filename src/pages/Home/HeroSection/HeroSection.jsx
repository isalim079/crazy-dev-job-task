import HeroTitle from "./HeroTitle";
import highlightL from "../../../assets/img/highlightL.png";
import highlightR from "../../../assets/img/highlightR.png";
import HeroBanner from "./HeroBanner";

const HeroSection = () => {
  return (
    <div className="lg:my-[100px] my-[60px]">
      {/* Title */}
      <div className="relative">
        <HeroTitle />

        {/* Highlights */}
        <div className="absolute lg:left-0 -left-5 bottom-0 lg:bottom-[30%]">
          <img className="lg:w-fit w-[60px]" src={highlightL} alt="" />
        </div>
        <div className="absolute -right-5 lg:right-0 bottom-[100%] lg:bottom-[65%]">
          <img className="lg:w-fit w-[60px]" src={highlightR} alt="" />
        </div>
      </div>

      <HeroBanner />
    </div>
  );
};

export default HeroSection;
