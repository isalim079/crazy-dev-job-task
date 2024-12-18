import BufferPricing from "./BufferPricing";
import PostizPricing from "./PostizPricing";

const PricingPlans = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] px-6 lg:px-0">
      <div>
        {/* Title */}
        <div className="mb-8 lg:mb-[60px]">
          <h1 className="font-jakarta text-[30px] lg:text-[48px] font-semibold text-center text-white">
            Pricing & Plans
          </h1>
        </div>

        {/* pricing cards */}
        <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-5">
            <PostizPricing />
            <BufferPricing />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
