import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {
  facebookData,
  instaData,
  linkedinData,
  reportingData,
  twitterData,
} from "./AnalyticsData";

const PostizAnalytics = () => {
  return (
    <div>
      {/* Social network for auto publishing */}
      <div className="p-[44px] bg-[#1A1919] rounded-2xl">
        <h4 className="font-jakarta text-[34px] font-semibold text-white mb-[40px]">
          Postiz - Scheduling & Publishing
        </h4>

        {/* social networks */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 text-white">
            Instagram
          </h5>
          {instaData.map((item) => (
            <div key={item.id}>
              <p className="font-jakarta text-white flex items-center gap-3 mb-3">
                <span
                  className={`p-2 rounded-full ${
                    item.postAvailability === true
                      ? "text-green-600"
                      : "text-red-600"
                  } bg-[#FFFFFF0D]`}
                >
                  {item.postAvailability === true ? <FaCheck /> : <RxCross2 />}
                </span>
                <span>{item.title}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Facebook */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
            Facebook
          </h5>
          {facebookData.map((item) => (
            <div key={item.id}>
              <p className="font-jakarta text-white flex items-center gap-3 mb-3">
                <span
                  className={`p-2 rounded-full ${
                    item.postAvailability === true
                      ? "text-green-600"
                      : "text-red-600"
                  } bg-[#FFFFFF0D]`}
                >
                  {item.postAvailability === true ? <FaCheck /> : <RxCross2 />}
                </span>
                <span>{item.title}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Twitter */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
            Twitter
          </h5>
          {twitterData.map((item) => (
            <div key={item.id}>
              <p className="font-jakarta text-white flex items-center gap-3 mb-3">
                <span
                  className={`p-2 rounded-full ${
                    item.postAvailability === true
                      ? "text-green-600"
                      : "text-red-600"
                  } bg-[#FFFFFF0D]`}
                >
                  {item.postAvailability === true ? <FaCheck /> : <RxCross2 />}
                </span>
                <span>{item.title}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Linkedin */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
            Linkedin
          </h5>
          {linkedinData.map((item) => (
            <div key={item.id}>
              <p className="font-jakarta text-white flex items-center gap-3 mb-3">
                <span
                  className={`p-2 rounded-full ${
                    item.postAvailability === true
                      ? "text-green-600"
                      : "text-red-600"
                  } bg-[#FFFFFF0D]`}
                >
                  {item.postAvailability === true ? <FaCheck /> : <RxCross2 />}
                </span>
                <span>{item.title}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Reporting */}
        <div>
          <h5 className="font-jakarta text-[22px] font-semibold mb-5 mt-[40px] text-white">
            Reporting
          </h5>
          {reportingData.map((item) => (
            <div key={item.id}>
              <p className="font-jakarta text-white flex items-center gap-3 mb-3">
                <span
                  className={`p-2 rounded-full ${
                    item.postAvailability === true
                      ? "text-green-600"
                      : "text-red-600"
                  } bg-[#FFFFFF0D]`}
                >
                  {item.postAvailability === true ? <FaCheck /> : <RxCross2 />}
                </span>
                <span>{item.title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostizAnalytics;
