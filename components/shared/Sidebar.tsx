import React from "react";
import NewDocumentButton from "./NewDocumentButton";
import DocumentsSidebarList from "./DocumentsSidebarList";

const Sidebar = () => {
  return (
    <div className=" min-h-screen h-fit w-[250px] bg-color-900 flex-col items-center  flex px-6 py-6 gap-6 max-md:hidden">
      <h3 className=" text-color-500 uppercase tracking-widest text-[14px]">
        My Documents
      </h3>
      <NewDocumentButton />
      <DocumentsSidebarList />
    </div>
  );
};

export default Sidebar;
