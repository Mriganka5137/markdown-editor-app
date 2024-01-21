import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" flex">
      <Sidebar />
      <div className=" flex-col w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
