import Navbar from "../../shared/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import PlatformComparison from "./PlatformComparison/PlatformComparison";
import PricingPlans from "./PricingPlans/PricingPlans";
import SocialMediaAnalytics from "./SocialMediaAnalytics/SocialMediaAnalytics";
import SocialMediaInbox from "./SocialMediaInbox/SocialMediaInbox";
import SocialMediaScheduling from "./SocialMediaScheduling/SocialMediaScheduling";
import TermsAndApprovals from "./TeamsAndApprovals/TermsAndApprovals";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <PlatformComparison />
      <PricingPlans />
      <SocialMediaScheduling />
      <SocialMediaAnalytics />
      <TermsAndApprovals />
      <SocialMediaInbox />
    </div>
  );
};

export default Home;
