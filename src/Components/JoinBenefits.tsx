import JoinBenefitCardGrid from "../Components/JoinBenefitsGrid";
import { joinBenefits } from "../data/JoinBenefitsData";
const JoinBenefits = () => {
  return (
    <div className="contant-width">
      <h5 className="headline">More reasons to join</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {joinBenefits.map((item) => (
          <JoinBenefitCardGrid item={item} />
        ))}
      </div>
    </div>
  );
};

export default JoinBenefits;
