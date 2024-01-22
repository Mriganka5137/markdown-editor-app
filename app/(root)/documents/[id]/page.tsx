import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MarkdownContainer from "@/components/shared/MarkdownContainer";
interface Props {
  params: {
    id: string;
  };
}

const page = ({ params: { id } }: Props) => {
  return (
    <div className=" container mx-auto max-h-full h-full ">
      <MarkdownContainer />
    </div>
  );
};

export default page;
