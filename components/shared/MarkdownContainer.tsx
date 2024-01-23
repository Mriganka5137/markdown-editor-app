"use client";
import React, { useState } from "react";

import MarkDown from "./MarkDown";
import Preview from "./Preview";
import { useMarkdown } from "@/zustand/store";
const MarkdownContainer = () => {
  const { markdown, setMarkdown } = useMarkdown((state) => state);

  const [viewMarkDown, setViewMarkDown] = useState(true);

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className=" bg-color-100 dark:bg-color-1000 flex w-full h-full overflow-y-hidden justify-center">
      {viewMarkDown && (
        <MarkDown markdown={markdown} setMarkdown={setMarkdown} />
      )}

      <Preview
        markdown={markdown}
        setViewMarkDown={setViewMarkDown}
        viewMarkDown={viewMarkDown}
      />
    </div>
  );
};

export default MarkdownContainer;
