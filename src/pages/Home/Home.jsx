import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import ChoosePostiz from "./ChoosePostiz/ChoosePostiz";
import CompareAlternatives from "./CompareAlternatives/CompareAlternatives";
import FrequentlyAskQues from "./FrequentlyAskQues/FrequentlyAskQues";
import HeroSection from "./HeroSection/HeroSection";
import PlatformComparison from "./PlatformComparison/PlatformComparison";
import PricingPlans from "./PricingPlans/PricingPlans";
import ReadyToGetStarted from "./ReadyToGetStarted/ReadyToGetStarted";
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
      <FrequentlyAskQues />
      <ReadyToGetStarted />
      <Footer />
    </div>
  );
};

export default Home;
