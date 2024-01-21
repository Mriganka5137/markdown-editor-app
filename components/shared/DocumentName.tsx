import React from "react";
import documentIcon from "@/public/assets/icon-document.svg";
import Image from "next/image";
const DocumentName = () => {
  return (
    <div className=" flex  items-center gap-2.5">
      <Image src={documentIcon} alt="document" className="h-4" />
      <div className=" flex flex-col">
        <label htmlFor="" className="text-color-400 text-[13px]">
          Document Name
        </label>
        <input
          type="text"
          name=""
          id=""
          className=" bg-transparent focus-within:outline-none text-color-100 font-normal font-roboto text-[15px] focus-within:border-color-100 border-b border-transparent w-[200px] pb-1 cursor-text"
          placeholder="Untitled Document.md"
        />
      </div>
    </div>
  );
};

export default DocumentName;
