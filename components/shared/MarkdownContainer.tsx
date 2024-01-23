"use client";
import React, { useEffect, useState } from "react";

import MarkDown from "./MarkDown";
import Preview from "./Preview";
import { useMarkdown } from "@/zustand/store";
import { usePathname, useRouter } from "next/navigation";

interface dataProps {
  content?: string;
  name?: string;
  id?: string;
}

const MarkdownContainer = ({ content, name, id }: dataProps) => {
  const path = usePathname();
  const { markdown, setMarkdown, setName, setID } = useMarkdown(
    (state) => state
  );

  useEffect(() => {
    if (path === "/documents/new") {
      setName("Untitled.md");
      setMarkdown("");
      setID("");
    }
    if (content && name && id) {
      setID(id);
      setMarkdown(content);
      setName(name);
    }
  }, [content]);

  const [viewMarkDown, setViewMarkDown] = useState(true);

  return (
    <div className="flex justify-center w-full h-full overflow-y-hidden bg-color-100 dark:bg-color-1000 max-md:flex-col">
      {viewMarkDown && (
        <MarkDown
          markdown={markdown}
          setMarkdown={setMarkdown}
          viewMarkDown={viewMarkDown}
          setViewMarkDown={setViewMarkDown}
        />
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
