import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex flex-col w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
