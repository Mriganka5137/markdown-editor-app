import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
import DocumentName from "./DocumentName";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className=" w-full bg-color-800 flex items-center  justify-between h-[75px] px-5">
      <div className="flex items-center gap-5 ">
        <MobileMenu />
        <Image alt="logo" src={logo} className="h-4 w-fit max-lg:hidden" />
        <DocumentName />
      </div>
      <div
        className="flex items-center gap-6 px-5  
      max-md:px-1
      "
      >
        <DeleteButton />
        <SaveButton />
      </div>
    </nav>
  );
};

export default Navbar;
