"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const NavbarLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className=" flex items-start">
      <Sidebar showSidebar={showSidebar} />
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
    </div>
  );
};

export default NavbarLayout;
