import BufferAnalytics from "./BufferAnalytics";
import PostizAnalytics from "./PostizAnalytics";

const SocialMediaAnalytics = () => {
  return (
    <div className="lg:mt-[120px]">
      <div>
        <h1 className="text-center font-jakarta text-[48px] font-semibold mb-[60px] text-white">
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
