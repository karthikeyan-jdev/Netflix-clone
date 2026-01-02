import { IoLanguage } from "react-icons/io5";
import logo from "../assets//images/app-logo.png";
import { FaCaretDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <img src={logo} alt="Netflix Logo" className="h-20 md:h-24 lg:h-28" />
      </div>
      <div className="text-white font-semibold flex gap-4">
        <div className="flex gap-1  border border-white px-2 py-1 md:px-3 md:py-1.5 items-center rounded-lg">
           <IoLanguage />
          <p className="text-[14px] md:text-[18px]">Engligh</p>
          <FaCaretDown />
        </div>
        <button className="px-3.5 py-1.5 md:px-4 md:py-1.5 bg-primary rounded-md text-[12px]">
          SingIn
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
