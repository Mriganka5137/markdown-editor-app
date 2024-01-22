import React from "react";
import ReactMarkdown from "react-markdown";
import showIcon from "@/public/assets/icon-show-preview.svg";
import hideIcon from "@/public/assets/icon-hide-preview.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  markdown: string;
  setViewMarkDown: React.Dispatch<React.SetStateAction<boolean>>;
  viewMarkDown: boolean;
}
const Preview = ({ markdown, setViewMarkDown, viewMarkDown }: Props) => {
  return (
    <div
      className={cn(
        " h-full overflow-y-auto  ",
        viewMarkDown ? "w-1/2" : "w-full "
      )}
    >
      <div className=" flex justify-between items-center dark:bg-color-900 bg-color-200 px-3 ">
        <h2 className=" text-color-500 text-[14px] uppercase px-4 py-2.5 tracking-widest  dark:text-color-400">
          Preview
        </h2>

        {viewMarkDown ? (
          <Image
            src={showIcon}
            alt="show"
            onClick={() => setViewMarkDown(false)}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={hideIcon}
            alt="hide"
            onClick={() => setViewMarkDown(true)}
            className="cursor-pointer"
          />
        )}
      </div>
      <ReactMarkdown
        className={cn(
          "font-roboto-slab prose tracking-widest p-4 dark:text-color-200 w-full ",
          !viewMarkDown && "mx-auto"
        )}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
