"use client";
import React from "react";
import deleteIcon from "@/public/assets/icon-delete.svg";
import Image from "next/image";
const DeleteButton = () => {
  return (
    <button onClick={() => {}}>
      <Image src={deleteIcon} alt="delete" className=" h-5 w-4" />
    </button>
  );
};

export default DeleteButton;
