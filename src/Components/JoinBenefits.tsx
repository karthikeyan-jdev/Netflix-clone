import JoinBenefitCardGrid from "../Components/JoinBenefitsGrid";
import { getJoinBenefits } from "../data/JoinBenefitsData";
import useLocalArr from "../hooks/useLocalArr";
const JoinBenefits = () => {
  const { data,loading } = useLocalArr(getJoinBenefits);
 if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <h5 className="headline">More reasons to join</h5>
      {data.map((item) => (
        <JoinBenefitCardGrid item={item} />
      ))}
    </div>
  );
};

export default JoinBenefits;
