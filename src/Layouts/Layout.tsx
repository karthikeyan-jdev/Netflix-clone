import { Outlet } from "react-router-dom";
import Footer from "../Layouts/Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)),url('https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg')",
        }}
      >
        <div className="w-[80%] mx-auto ">
          <Header />
        </div>
      </div>
      <main className="bg-linear-to-b from-darkBlue to-black/90">
        <div className="w-[80%] mx-auto ">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
