import BufferScheduling from "./BufferScheduling";
import PostizScheduling from "./PostizScheduling";

const SocialMediaScheduling = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] px-6 lg:px-0">
      <div>
        <h1 className="text-center font-jakarta text-[32px] lg:text-[48px] font-semibold mb-[40px] lg:mb-[60px] text-white">
          Social Media Scheduling & Publishing
        </h1>

        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-3">
          <PostizScheduling />
          <BufferScheduling />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaScheduling;
