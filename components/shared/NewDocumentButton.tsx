import React from "react";

import Image from "next/image";
const NewDocumentButton = () => {
  return (
    <button className=" bg-color-orange hover:bg-color-orange-hover px-4 py-3 flex items-center gap-2 rounded-[4px] text-color-100 ">
      + New Document
    </button>
  );
};

export default NewDocumentButton;
