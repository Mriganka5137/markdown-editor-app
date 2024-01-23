"use client";
import React from "react";
import saveIcon from "@/public/assets/icon-save.svg";
import Image from "next/image";
import { useMarkdown } from "@/zustand/store";
import { usePathname, useRouter } from "next/navigation";
import { createDocument } from "@/lib/actions/Document.action";
const SaveButton = () => {
  // I have the markdown content here
  const router = useRouter();
  const markdown = useMarkdown((state) => state.markdown);
  const name = useMarkdown((state) => state.name);
  const path = usePathname();
  console.log(path);
  // console.log(markdown, name);
  // On click of this button, I want to save the markdown content to the database
  const handleSubmit = async () => {
    if (path === "/documents/new") {
      if (markdown === "") return; //show toast error
      //create a new document -->Show toast success
      const id = await createDocument({ name, content: markdown });

      router.push(`/documents/${id}`);
    } else {
      //update the document -->Show toast success
      console.log("update document");
    }
  };

  //if the url is /documents/new, I want to create a new document
  // After creating the document, I want to redirect to /documents/:id

  //if the url is /documents/:id, I want to update the document with the id

  return (
    <button
      className=" bg-color-orange hover:bg-color-orange-hover px-4 py-3 flex items-center gap-2 rounded-[4px] text-color-100"
      onClick={handleSubmit}
    >
      <Image src={saveIcon} alt="save" className=" h-4 w-4" />
      <span className="max-md:hidden">Save Changes</span>
    </button>
  );
};

export default SaveButton;
