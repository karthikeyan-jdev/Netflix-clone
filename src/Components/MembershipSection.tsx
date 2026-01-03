import { GrNext } from "react-icons/gr";

const MembershipSection = () => {
  return (
    <div className="contant-width">
      <div className=" text-white py-10 mt-7 space-y-5 lg:w-[70%] mx-auto">
        <h3 className="sm:text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Email address"
            className="px-4 py-3 border border-gray-400 sm:flex-1"
          />
          <button className="bg-primary w-fit text-white flex items-center gap-2 px-7 py-3.5">
            <p className="font-bold">Get Started</p>
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
