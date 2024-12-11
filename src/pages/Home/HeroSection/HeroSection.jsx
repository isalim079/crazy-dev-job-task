import HeroTitle from "./HeroTitle";
import highlightL from "../../../assets/img/highlightL.png";
import highlightR from "../../../assets/img/highlightR.png";
import HeroBanner from "./HeroBanner";

const HeroSection = () => {
  return (
    <div className="lg:my-[100px]">

      {/* Title */}
      <div className="relative">
        <HeroTitle />

        {/* Highlights */}
        <div className="absolute left-0 bottom-[30%]">
          <img src={highlightL} alt="" />
        </div>
        <div className="absolute right-0 bottom-[65%]">
          <img src={highlightR} alt="" />
        </div>
      </div>

      <HeroBanner />
    </div>
  );
};

export default HeroSection;
