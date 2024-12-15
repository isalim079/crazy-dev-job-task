import { FaCheck } from "react-icons/fa";
import { termsAndApprovalData } from "./TermsAndApprovalsData";
import { RxCross2 } from "react-icons/rx";

const TermsAndApprovals = () => {
  return (
    <div className="lg:mt-[120px]">
      <div>
        <h1 className="text-center font-jakarta text-[48px] font-semibold mb-[60px] text-white">
          Social Media Scheduling & Publishing
        </h1>

        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-3">
          {/* Postiz Data */}
          <div className="p-[44px] bg-darkGrey rounded-2xl">
            <h4 className="font-jakarta text-[34px] font-semibold text-white mb-[40px]">
              Postiz - Teams & Approvals
            </h4>
            {termsAndApprovalData.map((item) => (
              <div key={item.id}>
                <p className="font-jakarta text-white flex items-center gap-3 mb-3">
                  <span
                    className={`p-2 rounded-full ${
                      item.postizAvailability === true
                        ? "text-green-600"
                        : "text-red-600"
                    } bg-[#FFFFFF0D]`}
                  >
                    {item.postizAvailability === true ? (
                      <FaCheck />
                    ) : (
                      <RxCross2 />
                    )}
                  </span>
                  <span>{item.terms}</span>
                </p>
              </div>
            ))}
          </div>
          {/* Buffer Data */}
          <div className="p-[44px] bg-darkGrey rounded-2xl">
            <h4 className="font-jakarta text-[34px] font-semibold text-white mb-[40px]">
              Buffer - Teams & Approvals
            </h4>
            {termsAndApprovalData.map((item) => (
              <div key={item.id}>
                <p className="font-jakarta text-white flex items-center gap-3 mb-3">
                  <span
                    className={`p-2 rounded-full ${
                      item.bufferAvailability === true
                        ? "text-green-600"
                        : "text-red-600"
                    } bg-[#FFFFFF0D]`}
                  >
                    {item.bufferAvailability === true ? (
                      <FaCheck />
                    ) : (
                      <RxCross2 />
                    )}
                  </span>
                  <span>{item.terms}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndApprovals;
