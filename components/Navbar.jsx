"use client";
import React from "react";
import { GoHome } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="z-10 flex justify-between px-5 fixed right-0 left-0 bottom-0 bg-white shadow-2xl h-20 items-center border border-t">
      <Link href="/" className=" flex justify-center items-center">
        <GoHome size={35} color={`${pathName === "/" ? "blue" : "black"}`} />
      </Link>
      <Link href="/saved" className="flex justify-center items-center">
        <CiBookmark
          size={35}
          color={`${pathName === "/saved" ? "blue" : "black"}`}
        />
      </Link>
      <Link href="/cart" className="flex justify-center items-center">
        <IoCartOutline
          size={35}
          color={`${pathName === "/cart" ? "blue" : "black"}`}
        />
      </Link>
      <Link href="/profile" className="flex justify-center items-center">
        <CgProfile
          size={35}
          color={`${pathName === "/profile" ? "blue" : "black"}`}
        />
      </Link>
    </div>
  );
};

export default Navbar;
