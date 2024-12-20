import { FaCheck } from "react-icons/fa";
import { postizePricingData } from "./pricingData";

const PostizPricing = () => {
  return (
    <div className="p-6 lg:p-[44px] bg-[#1A1919] rounded-2xl">
      {/* title section */}
      <div className="font-jakarta mt-7 lg:mt-[40px]">
        <h4 className=" text-[22px] lg:text-[34px] font-semibold mb-[40px] text-white">
          Postiz Pricing
        </h4>
        <ul className="mb-6">
          <li className="flex items-center gap-2 lg:gap-3">
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
        {postizePricingData.map((item) => (
          <div
            key={item.id}
            className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:items-center bg-[#242323] p-7 rounded-lg mb-2 text-white justify-between font-jakarta"
          >
            <div>
              <h6 className="text-[18px] lg:text-[22px] font-semibold">
                {item.pricingName}
              </h6>
              <p className="text-[18px] lg:text-[22px] font-semibold">
                <span className="lg:text-[40px] text-[32px] font-semibold">
                  ${item.price}
                </span>
                /mo
              </p>
            </div>
            <div className="font-dmSans">
              <p className="text-[18px] lg:text-[20px]">
                Social sets: {item.socialSets}
              </p>
              <p className="text-[18px] lg:text-[20px]">Users: {item.users}</p>
            </div>
          </div>
        ))}
      </div>

      {/* On premise service */}
      <div>
        <h3 className="font-jakarta text-[22px] font-semibold mb-6 mt-[40px] text-white">
          On-premise services & Enterprise
        </h3>

        {/* card 1 */}
        <div className="text-white font-jakarta p-7 rounded-lg bg-gradient-to-bl from-[#45007C] to-[#1C0033] flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h5 className=" lg:text-[22px] mb-2 lg:mb-0">
              Self service installation
            </h5>
            <p className="lg:text-[22px] font-semibold mb-5 lg:mb-0">
              <span className="text-[28px] lg:text-[40px] font-semibold">
                $2000
              </span>
              /one time
            </p>
          </div>
          <div>
            <p>Social Sets: 1</p>
            <p>Users: 1</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="text-white font-jakarta p-7 rounded-lg bg-gradient-to-bl from-[#6B007C] to-[#280033] flex lg:flex-row flex-col lg:items-center justify-between mt-3">
          <div>
            <h5 className="lg:text-[22px] mb-2 lg:mb-0">Enterprise</h5>
            <p className="lg:text-[22px] font-semibold mb-5 lg:mb-0">
              <span className="text-[28px] lg:text-[40px] font-semibold">
                Custom
              </span>
            </p>
          </div>
          <div>
            <p>Social Sets: 1</p>
            <p>Users: 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostizPricing;
