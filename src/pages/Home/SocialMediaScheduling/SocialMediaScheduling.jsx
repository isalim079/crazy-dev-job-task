import BufferScheduling from "./BufferScheduling";
import PostizScheduling from "./PostizScheduling";

const SocialMediaScheduling = () => {
  return (
    <div className="lg:mt-[120px]">
      <div>
        <h1 className="text-center font-jakarta text-[48px] font-semibold mb-[60px] text-white">
          Social Media Scheduling & Publishing
        </h1>

        <div className="max-w-screen-xl mx-auto">
          <PostizScheduling />
          <BufferScheduling />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaScheduling;
