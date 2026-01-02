import { GrNext } from "react-icons/gr";
import Navbar from "../Components/Navbar";

const Header = () => {
  return (
    <div className="h-[85vh] sm:h-screen bg-cover bg-center relative ">
      <Navbar />
      <div
        className="absolute top-3/6 lg:top-4/7 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-white w-[90%] sm:w-[80%] md:w-[60%] xl:w-[40%]  text-center"
      >
        <h1 className="text-[34px] sm:text-[36px] lg:text-[46px] xl:text-[52px] font-bold ">
          Unlimited movies, shows, and more
        </h1>
        <p className=" sm:text-[18px]">Starts at ₹149. Cancel at any time.</p>
        <p className="sm:text-[18px] m-5 ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="sm:flex sm:gap-2 sm:justify-center font-semibold">
          <input
            type="email"
            placeholder="Email address"
            className="text-gray-100 p-2.5 sm:pl-2 border border-gray-400 w-full sm:w-auto sm:flex-1"
          />
          <button className="flex items-center mx-auto sm:mx-1 gap-2 bg-primary mt-4 sm:mt-1 px-2 py-1.5 rounded-md">
            <p className="text-[18px] sm:text-[20px] p-0.5  ">Get Started</p>
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
