"use client";
import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const NavbarLayout = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className=" flex items-start">
      {children}
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
    </div>
  );
};

export default NavbarLayout;
