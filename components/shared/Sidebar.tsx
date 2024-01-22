import React from "react";
import NewDocumentButton from "./NewDocumentButton";
import DocumentsSidebarList from "./DocumentsSidebarList";
import ThemeSwitch from "../theme/themeSwitch";

const Sidebar = () => {
  return (
    <div className=" w-[250px] bg-color-900 flex-col items-center flex max-md:hidden justify-between pb-10 border-r border-transparent dark:border-zinc-800">
      <div className=" flex flex-col gap-6 justify-start  py-6">
        <h3 className=" text-color-500 uppercase tracking-widest text-[14px]">
          My Documents
        </h3>
        <NewDocumentButton />
        <DocumentsSidebarList />
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default Sidebar;
