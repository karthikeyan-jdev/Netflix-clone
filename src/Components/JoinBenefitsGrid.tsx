import type { JoinBenefit } from "../data/JoinBenefitsData";

interface Props {
  item: JoinBenefit;
}

const JoinBenefitsGrid = ({ item }: Props) => {
  return (
    <div className="bg-linear-to-b from-gridColorTop to-gridColorBtm p-6 space-y-2 rounded-2xl">
      <h3 className="text-white font-semibold text-xl">{item.title}</h3>
      <p className="text-gray-300 text-md">{item.description}</p>
      <img src={item.icon} alt={item.title} className="w-16 ml-auto" />
    </div>
  );
};

export default JoinBenefitsGrid;
