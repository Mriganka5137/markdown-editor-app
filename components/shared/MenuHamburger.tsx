"use client";
import React from "react";
import hamburger from "@/public/assets/icon-menu.svg";
import Image from "next/image";
interface Props {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuHamburger = ({ setShowSidebar }: Props) => {
  return (
    <button
      className=" h-[72px] w-[72px] flex justify-center items-center  hover:bg-color-orange bg-color-700"
      onClick={() => setShowSidebar(true)}
    >
      <Image src={hamburger} alt="menu" className="" />
    </button>
  );
};

export default MenuHamburger;
