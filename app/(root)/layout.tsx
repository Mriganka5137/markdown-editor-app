import Navbar from "@/components/shared/Navbar";
import NavbarLayout from "@/components/shared/NavbarLayout";
import Sidebar from "@/components/shared/Sidebar";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex  flex-col w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
