import Link from "next/link";
import React from "react";

const NewDocumentButton = () => {
  return (
    <Link
      href="/documents/new"
      className=" bg-color-orange hover:bg-color-orange-hover px-4 py-3 flex items-center gap-2 rounded-[4px] text-color-100 "
    >
      + New Document
    </Link>
  );
};

export default NewDocumentButton;
