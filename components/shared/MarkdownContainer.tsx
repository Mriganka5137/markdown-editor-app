"use client";
import React, { useRef } from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../ui/resizable";

const MarkdownContainer = () => {
  const markdownRef = useRef<HTMLDivElement | null>(null);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="bg-color-100 dark:bg-color-1000 "
    >
      <ResizablePanel defaultSize={50} maxSize={75} className="">
        <div
          className=" w-full  h-full max-h-full border-r border-color-300 dark:border-color-600 bg-red-200 overflow-y-auto"
          ref={markdownRef}
        >
          Hello
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} maxSize={75} className="max-md:hidden">
        <div className=" w-full h-full overflow-y-auto ">
          {markdownRef?.current?.innerHTML}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MarkdownContainer;
