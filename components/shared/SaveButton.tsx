import React from "react";
import saveIcon from "@/public/assets/icon-save.svg";
import Image from "next/image";
const SaveButton = () => {
  return (
    <button className=" bg-color-orange hover:bg-color-orange-hover px-4 py-3 flex items-center gap-2 rounded-[4px] text-color-100">
      <Image src={saveIcon} alt="save" className=" h-4 w-4" />
      <span className="max-md:hidden">Save Changes</span>
    </button>
  );
};

export default SaveButton;
