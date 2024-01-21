import Image from "next/image";
import Link from "next/link";
import React from "react";
import documentIcon from "@/public/assets/icon-document.svg";

const documentsList = [
  {
    id: "1",
    name: "README.md",
    createdAt: "01 Jan 2021",
  },

  {
    id: "2",
    name: "untitled.md",
    createdAt: "01 Jan 2021",
  },

  {
    id: "3",
    name: "text.md",
    createdAt: "01 Jan 2021",
  },

  {
    id: "4",
    name: " game.md",
    createdAt: "01 Jan 2021",
  },

  {
    id: "5",
    name: "hero.md",
    createdAt: "01 Jan 2021",
  },

  {
    id: "6",
    name: "redesign.md",
    createdAt: "01 Jan 2021",
  },

  {
    id: "7",
    name: "layout.md",
    createdAt: "01 Jan 2021",
  },

  {
    id: "8",
    name: "page.md",
    createdAt: "01 Jan 2021",
  },

  {
    id: "9",
    name: "new.md",
    createdAt: "01 Jan 2021",
  },
];

const DocumentsSidebarList = () => {
  // QUery for documents and get the list here
  return (
    <div className="flex flex-col text-color-100 gap-4">
      {documentsList.map((document) => (
        <Link
          key={document.id}
          href={`/documents/${document.id}`}
          className=" flex items-center gap-2.5"
        >
          <Image src={documentIcon} alt="document icon" className="h-4" />
          <div>
            <p className=" font-roboto text-[13px] text-color-500 font-light">
              {document.createdAt}
            </p>
            <h3 className=" text-[15px] text-color-100 font-normal hover:text-color-orange">
              {document.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DocumentsSidebarList;
