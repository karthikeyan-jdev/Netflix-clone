import { GrNext } from "react-icons/gr";
import Navbar from "../Components/Navbar";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)),url('https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg')",
      }}
    >
      <div className="contant-width h-[85vh] sm:h-screen bg-cover bg-center relative ">
        <Navbar />
        <div
          className="absolute top-3/6 lg:top-4/7 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-white w-[90%] sm:w-[80%] md:w-[60%] xl:w-[50%]  text-center"
        >
          <h1 className="text-[34px] sm:text-[36px] lg:text-[46px] xl:text-[52px] font-bold ">
            Unlimited movies, shows, and more
          </h1>
          <p className=" sm:text-[18px]">Starts at ₹149. Cancel at any time.</p>
          <p className="sm:text-[18px] m-5 ">
            Ready to watch? Enter your email to create or restart your
            membership.
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
    </div>
  );
};

export default Header;
