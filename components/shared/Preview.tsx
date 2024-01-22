import React from "react";
import ReactMarkdown from "react-markdown";
interface Props {
  markdown: string;
}
const Preview = ({ markdown }: Props) => {
  return (
    <div className=" w-1/2 h-full overflow-y-auto">
      <h2 className=" text-color-500 text-[14px] uppercase px-4 py-2.5 bg-color-200 tracking-widest dark:bg-color-900 dark:text-color-400">
        Preview
      </h2>
      <ReactMarkdown className="font-roboto-slab prose tracking-widest p-4 dark:text-color-200 w-full ">
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
