import { RxCross2 } from "react-icons/rx";
import {
  autoPublishCarousels,
  schedulingViewsSupported,
  socialEssentialData,
  socialNetworksData,
  tagUsersOn,
} from "./SocialMediaSchedulingData";
import { FaCheck } from "react-icons/fa";

const BufferScheduling = () => {
  return (
    <div>
      {/* Social network for auto publishing */}
      <div className="p-[44px] bg-[#1A1919] rounded-2xl">
        <h4 className="font-jakarta text-[34px] font-semibold text-white mb-[40px]">
          Buffer - Scheduling & Publishing
        </h4>

        {/* social networks */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 text-white">
            Social networks for auto-publishing
          </h5>
          {socialNetworksData.map((item) => (
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
                <span>{item.social}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Essentials */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
            Essentials
          </h5>
          {socialEssentialData.map((item) => (
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
                <span>{item.social}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Tag users on */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
            Tag users on
          </h5>
          {tagUsersOn.map((item) => (
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
                <span>{item.social}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Auto publish carousel on */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
            Auto-publish carousels on
          </h5>
          {autoPublishCarousels.map((item) => (
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
                <span>{item.social}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Scheduling views supported*/}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
            Scheduling views supported
          </h5>
          {schedulingViewsSupported.map((item) => (
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
                <span>{item.social}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BufferScheduling;
