"use client";
import React from "react";
import deleteIcon from "@/public/assets/icon-delete.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMarkdown } from "@/zustand/store";
import { deleteDocumentByID } from "@/lib/actions/Document.action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
const DeleteButton = () => {
  const path = usePathname();
  const router = useRouter();

  if (path === "/documents/new") return null;
  const { id, name } = useMarkdown((state) => state);
  const handleDelete = async () => {
    await deleteDocumentByID({ id });
    // Show Toast
    router.push("/documents/new");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button>
          <Image src={deleteIcon} alt="delete" className="w-4 h-5 " />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-none bg-color-100 dark:bg-color-900  max-w-[350px]">
        <AlertDialogHeader>
          <AlertDialogTitle className=" text-[20px] font-bold">
            Delete this document?
          </AlertDialogTitle>
          <AlertDialogDescription className=" font-normal text-[14px] leading-[170%] tracking-wider text-color-500 dark:text-color-400">
            Are you sure you want to delete the{" "}
            <span className="italic ">{name}</span> document and its contents?
            This action cannot be reversed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none bg-color-200 dark:bg-color-800">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="text-white bg-color-orange hover:bg-color-orange-hover"
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
