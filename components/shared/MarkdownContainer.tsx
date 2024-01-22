"use client";
import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import { Textarea } from "../ui/textarea";
const MarkdownContainer = () => {
  const [markdown, setMarkdown] = useState("");

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className=" bg-color-100 dark:bg-color-1000 flex w-full h-full overflow-y-scroll">
      <div className=" w-1/2 h-full border-r border-color-300 dark:border-color-600 border">
        <h2 className=" text-color-500 text-[14px] uppercase px-4 py-2.5 bg-color-200 tracking-widest dark:bg-color-900 dark:text-color-400">
          Markdown
        </h2>
        <Textarea
          autoFocus
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Welcome"
          className=" focus:outline-none  font-roboto-mono text-color-700 dark:text-color-400 px-4 py-2.5 tracking-wider bg-transparent  resize-none  text-lg h-lvh overflow-y-scroll"
        />
      </div>
      <div className=" w-1/2  ">
        <h2 className=" text-color-500 text-[14px] uppercase px-4 py-2.5 bg-color-200 tracking-widest dark:bg-color-900 dark:text-color-400">
          Preview
        </h2>
        <ReactMarkdown className="font-roboto-slab prose tracking-widest p-4 dark:text-color-200">
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownContainer;
