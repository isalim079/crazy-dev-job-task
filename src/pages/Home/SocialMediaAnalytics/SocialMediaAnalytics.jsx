import BufferAnalytics from "./BufferAnalytics";
import PostizAnalytics from "./PostizAnalytics";

const SocialMediaAnalytics = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] px-6 lg:px-0">
      <div className="">
        <h1 className="text-center font-jakarta text-[32px] lg:text-[48px] font-semibold mb-[40px]  lg:mb-[60px] text-white">
          Social Media Analytics & Reporting
        </h1>

        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-3">
          <PostizAnalytics />
          <BufferAnalytics />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAnalytics;
