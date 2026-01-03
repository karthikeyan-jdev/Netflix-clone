import { FaCaretDown } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer bg-black text-gray-400 pb-25">
      <div className="contant-width space-y-12">
        <p>
          Questions? Call <a href="#">0800-123-456</a>
        </p>
        {/* Footer Links */}
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <span>
            <li>
              <a href="#" className="">
                FAQ
              </a>
            </li>{" "}
            <li>
              <a href="#">Account</a>
            </li>{" "}
            <li>
              <a href="#">Investor Relations</a>
            </li>{" "}
            <li>
              <a href="#">Ways to Watch</a>
            </li>{" "}
          </span>
          <span>
            <li>
              <a href="#">Privacy</a>
            </li>{" "}
            <li>
              <a href="#">Corporate Information</a>
            </li>{" "}
            <li>
              <a href="#">Speed Test</a>
            </li>{" "}
            <li>
              <a href="#">Only on Netflix</a>
            </li>{" "}
          </span>
          <span>
            <li>
              <a href="">Help Centre</a>
            </li>
            <li>
              <a href="">Media Centre</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
          </span>
          <span>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
          </span>
        </ul>
        {/* Language Selector */}
        <div className="flex gap-1 w-fit border border-white px-2 py-1 items-center rounded-lg">
          <IoLanguage />
          <p className="text-[12px] md:text-[14px]">Engligh</p>
          <FaCaretDown />
        </div>
        <h5>Netflix India</h5>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-600 underline">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
