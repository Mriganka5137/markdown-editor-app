"use client";
import React, { useState } from "react";

import ReactMarkdown from "react-markdown";
import { Textarea } from "../ui/textarea";
import MarkDown from "./MarkDown";
import Preview from "./Preview";
const MarkdownContainer = () => {
  const [markdown, setMarkdown] = useState("");

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className=" bg-color-100 dark:bg-color-1000 flex w-full h-full overflow-y-hidden">
      <MarkDown markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default MarkdownContainer;
