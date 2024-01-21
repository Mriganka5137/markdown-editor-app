import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
import MenuHamburger from "./MenuHamburger";
import DocumentName from "./DocumentName";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";

const Navbar = () => {
  return (
    <nav className=" w-full bg-color-800 flex items-center  justify-between h-[75px] px-5">
      <div className=" flex items-center gap-5">
        {/* <MenuHamburger setShowSidebar={setShowSidebar} /> */}
        <Image alt="logo" src={logo} className=" h-4 w-fit" />
        <DocumentName />
      </div>
      <div className=" flex items-center px-5 gap-6">
        <DeleteButton />
        <SaveButton />
      </div>
    </nav>
  );
};

export default Navbar;
