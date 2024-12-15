import { FaCheck } from "react-icons/fa";
import { socialMediaInboxData } from "./SocialMediaInoxData";
import { RxCross2 } from "react-icons/rx";

const SocialMediaInbox = () => {
  return (
    <div className="lg:mt-[120px]">
      <div>
        <h1 className="text-center font-jakarta text-[48px] font-semibold mb-[60px] text-white">
          Social Media Analytics & Reporting
        </h1>

        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-3">
          {/* Postiz social media inbox */}
          <div className="bg-darkGrey p-[44px] rounded-2xl">
            <h4 className="font-jakarta text-[34px] font-semibold text-white mb-[40px]">
              Postiz -Social Media Inbox
            </h4>

            <div>
              {socialMediaInboxData.map((item) => (
                <div key={item.id}>
                  <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
                    {item.title}
                  </h5>
                  {item.features.map((item) => (
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
              ))}
            </div>
          </div>

          {/* Buffer social media inbox */}
          <div className="bg-darkGrey p-[44px] rounded-2xl">
            <h4 className="font-jakarta text-[34px] font-semibold text-white mb-[40px]">
              Buffer -Social Media Inbox
            </h4>

            <div>
              {socialMediaInboxData.map((item) => (
                <div key={item.id}>
                  <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
                    {item.title}
                  </h5>
                  {item.features.map((item) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaInbox;
