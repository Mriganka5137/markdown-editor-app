"use client";
import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
const MarkdownContainer = () => {
  const [markdown, setMarkdown] = useState("");

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className=" bg-color-100 dark:bg-color-1000 flex w-full">
      <div className=" w-full border-r border-color-300 dark:border-color-600 ">
        <h2 className=" text-color-500 text-[14px] uppercase px-4 py-2.5 bg-color-200 tracking-widest dark:bg-color-900 dark:text-color-400">
          Markdown
        </h2>
        <textarea
          autoFocus
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Welcome"
          className=" w-full min-h-screen max-h-fit focus:outline-none font-roboto-mono text-color-700 dark:text-color-400 px-4 py-2.5 tracking-wider bg-transparent bg-green-100"
        />
      </div>
      <div className=" w-full ">
        <h2 className=" text-color-500 text-[14px] uppercase px-4 py-2.5 bg-color-200 tracking-widest dark:bg-color-900 dark:text-color-400">
          Preview
        </h2>
        <ReactMarkdown className="font-roboto-slab text-color-700 dark:text-color-400 px-4 py-2.5 tracking-wider prose min-h-screen max-h-fit">
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownContainer;
