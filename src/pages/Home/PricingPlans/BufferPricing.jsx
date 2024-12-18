import { FaCheck } from "react-icons/fa";
import { bufferPricingData } from "./pricingData";

const BufferPricing = () => {
    return (
        <div className=" p-6 lg:p-[44px] bg-[#1A1919] rounded-2xl">
      {/* title section */}
      <div className="font-jakarta mt-[40px]">
        <h4 className="text-[22px] lg:text-[34px] font-semibold mb-[40px] text-white">
          Buffer Pricing
        </h4>
        <ul className="mb-6">
          <li className="flex items-center gap-3">
            <span className="p-2 rounded-full text-green-600 bg-[#FFFFFF0D]">
              <FaCheck />
            </span>
            <span className="font-dmSans text-[18px] lg:text-[22px] text-[#D1D1D1]">
              14 day free trial, credit card required
            </span>
          </li>
          <li className="flex items-center gap-3 mt-3">
            <span className="p-2 rounded-full text-green-600 bg-[#FFFFFF0D]">
              <FaCheck />
            </span>
            <span className="font-dmSans text-[18px] lg:text-[22px] text-[#D1D1D1]">
              10% annual discount
            </span>
          </li>
        </ul>
      </div>

      {/* pricing */}
      <div>
        {bufferPricingData.map((item) => (
          <div
            key={item.id}
            className="flex lg:flex-row flex-col lg:items-center bg-[#242323] p-7 rounded-lg mb-2 text-white justify-between font-jakarta"
          >
            <div>
              <h6 className="text-[18px] lg:text-[22px] font-semibold">{item.pricingName}</h6>
              <p className="text-[18px] lg:text-[22px] font-semibold mb-5 lg:mb-0">
                <span className="lg:text-[40px] text-[32px] font-semibold">${item.price}</span>
                /mo
              </p>
            </div>
            <div className="font-dmSans">
              <p className="lg:text-[20px]">Social sets: {item.socialSets}</p>
              <p className="lg:text-[20px]">{item.additional && <>(Additional: ${item.additional})</>}</p>
              <p className="lg:text-[20px]">Users: {item.users}</p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
    );
};

export default BufferPricing;