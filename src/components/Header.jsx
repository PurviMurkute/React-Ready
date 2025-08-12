import React from "react";
import { SiReactos } from "react-icons/si";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="w-full bg-[#f2dd89] fixed top-0 left-0 z-10 px-5 py-2">
      <div className="flex justify-between items-center">
          <Link to="home" smooth={true} duration={500} className="flex items-center gap-3">
            <SiReactos className="text-[#0f172a] text-2xl" />
            <span className="text-[#0f172a] text-2xl font-bold">React Ready</span>
          </Link>
        <div className="flex space-x-4 text-[#0f172a] font-bold cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
