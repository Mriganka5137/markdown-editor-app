import React from "react";
import MarkdownContainer from "@/components/shared/MarkdownContainer";

interface Props {
  params: {
    id: string;
  };
}

const page = ({ params: { id } }: Props) => {
  return (
    <div className="w-full document-page border border-yellow-200 overflow-y-hidden">
      <MarkdownContainer />
    </div>
  );
};

export default page;
