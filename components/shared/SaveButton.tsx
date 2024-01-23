"use client";
import React from "react";
import saveIcon from "@/public/assets/icon-save.svg";
import Image from "next/image";
import { useMarkdown } from "@/zustand/store";
import { usePathname, useRouter } from "next/navigation";
import {
  createDocument,
  updateDocumentByID,
} from "@/lib/actions/Document.action";
import { useToast } from "../ui/use-toast";
const SaveButton = () => {
  // I have the markdown content here
  const router = useRouter();
  const { markdown, id, name } = useMarkdown((state) => state);
  const path = usePathname();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (path === "/documents/new") {
      if (markdown === "") return; //show toast error
      //create a new document -->Show toast success
      const id = await createDocument({ name, content: markdown });
      router.push(`/documents/${id}`);
      toast({
        title: "Document created successfully",
        description: "You can now access it from the sidebar",
        variant: "success",
      });
    } else {
      //update the document with the id
      await updateDocumentByID({
        id,
        name,
        content: markdown,
      });

      toast({
        title: "Document updated successfully",
        description: "You can now access it from the sidebar",
        variant: "success",
      });
    }
  };

  return (
    <button
      className=" bg-color-orange hover:bg-color-orange-hover px-4 py-3 flex items-center gap-2 rounded-[4px] text-color-100"
      onClick={handleSubmit}
    >
      <Image src={saveIcon} alt="save" className="w-4 h-4 " />
      <span className="max-md:hidden">Save Changes</span>
    </button>
  );
};

export default SaveButton;
