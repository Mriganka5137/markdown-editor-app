import React from "react";
import MarkdownContainer from "@/components/shared/MarkdownContainer";
import { getDocumentByID } from "@/lib/actions/Document.action";
import { useMarkdown } from "@/zustand/store";

interface Props {
  params: {
    id: string;
  };
}

const DocumentPage = async ({ params: { id } }: Props) => {
  const data = await getDocumentByID({ id });
  return (
    <div className="w-full overflow-y-hidden document-page">
      <MarkdownContainer id={id} content={data.content} name={data.name} />
    </div>
  );
};

export default DocumentPage;
