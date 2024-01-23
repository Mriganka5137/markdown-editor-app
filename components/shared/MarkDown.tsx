"use client";
import React from "react";
import { Textarea } from "../ui/textarea";
import showIcon from "@/public/assets/icon-show-preview.svg";

import Image from "next/image";
interface Props {
  markdown?: string;
  setMarkdown: (markdown: string) => void;
  viewMarkDown?: boolean;
  setViewMarkDown?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MarkDown = ({
  markdown,
  setMarkdown,
  viewMarkDown,
  setViewMarkDown,
}: Props) => {
  return (
    <div className="w-1/2 h-full overflow-y-hidden border-r  border-color-300 dark:border-color-600 max-md:w-full">
      <div className=" flex justify-between items-center bg-color-200 px-2 dark:bg-color-900">
        <h2 className=" text-color-500 text-[14px] uppercase px-4 py-2.5 bg-color-200 tracking-widest dark:bg-color-900 dark:text-color-400">
          Markdown
        </h2>

        <Image
          src={showIcon}
          alt="show"
          onClick={() => setViewMarkDown?.(false)}
          className="cursor-pointer"
        />
      </div>
      <Textarea
        autoFocus
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type Here"
        className=" focus:outline-none  font-roboto-mono text-color-700 dark:text-color-400 px-4 py-2.5 tracking-wider bg-transparent  resize-none  text-lg h-full overflow-y-auto"
      />
    </div>
  );
};

export default MarkDown;
