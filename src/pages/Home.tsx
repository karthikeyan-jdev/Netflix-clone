import FAQSection from "../Components/FAQSection";
import JoinBenefits from "../Components/JoinBenefits";
import MembershipSection from "../Components/MembershipSection";
import TrendingMovies from "../Components/TrendingMovies";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="bg-linear-to-b from-darkBlue to-black/90">
          <TrendingMovies />
          <JoinBenefits />
      </div>
      <FAQSection />
      <MembershipSection />
    </div>
  );
};

export default Home;
