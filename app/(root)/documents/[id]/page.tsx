import React from "react";
import MarkdownContainer from "@/components/shared/MarkdownContainer";

interface Props {
  params: {
    id: string;
  };
}

const page = ({ params: { id } }: Props) => {
  return (
    <div className=" ">
      <MarkdownContainer />
    </div>
  );
};

export default page;
