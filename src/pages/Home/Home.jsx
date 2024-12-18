import Navbar from "../../shared/Navbar/Navbar";
import ChoosePostiz from "./ChoosePostiz/ChoosePostiz";
import CompareAlternatives from "./CompareAlternatives/CompareAlternatives";
import HeroSection from "./HeroSection/HeroSection";
import PlatformComparison from "./PlatformComparison/PlatformComparison";
import PricingPlans from "./PricingPlans/PricingPlans";
import SocialMediaAnalytics from "./SocialMediaAnalytics/SocialMediaAnalytics";
import SocialMediaInbox from "./SocialMediaInbox/SocialMediaInbox";
import SocialMediaScheduling from "./SocialMediaScheduling/SocialMediaScheduling";
import Summary from "./Summary/Summary";
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
      <Summary />
      <CompareAlternatives />
      <ChoosePostiz />
    </div>
  );
};

export default Home;
