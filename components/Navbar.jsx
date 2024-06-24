import React from "react";
import { GoHome } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="z-10 flex gap-3 fixed right-7 left-7 bottom-12 bg-white rounded-3xl shadow-2xl h-20 items-center justify-between px-10">
      <div className="flex justify-center items-center">
        <GoHome size={35} />
      </div>
      <div className="flex justify-center items-center">
        <CiBookmark size={35} />
      </div>
      <div className="flex justify-center items-center">
        <IoCartOutline size={35} />
      </div>
      <div className="flex justify-center items-center">
        <CgProfile size={35} />
      </div>
    </div>
  );
};

export default Navbar;
