import React from "react";
import Hamburger from "@/public/assets/icon-menu.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeSwitch from "../theme/themeSwitch";
import DocumentsSidebarList from "./DocumentsSidebarList";
import NewDocumentButton from "./NewDocumentButton";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className=" md:hidden">
        <Image src={Hamburger} alt="menu" className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className=" bg-color-900 w-[250px] border-none "
      >
        <div className=" w-[250px] flex-col items-start flex  justify-between pb-10   h-screen">
          <div className=" flex flex-col gap-6 justify-start  ">
            <Image alt="logo" src={logo} className="h-4 w-fit " />
            <h3 className=" text-color-500 uppercase tracking-widest text-[14px]">
              My Documents
            </h3>
            <NewDocumentButton />
            <DocumentsSidebarList />
          </div>
          <ThemeSwitch />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
