import BufferPricing from "./BufferPricing";
import PostizPricing from "./PostizPricing";

const PricingPlans = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px]">
      <div>
        {/* Title */}
        <div className="mb-8 lg:mb-[60px]">
          <h1 className="font-jakarta text-[30px] lg:text-[48px] font-semibold text-center text-white">
            Pricing & Plans
          </h1>
        </div>

        {/* pricing cards */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="">
              <PostizPricing />
            </div>
            <div>
              <BufferPricing />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
