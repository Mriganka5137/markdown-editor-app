import React from "react";

const NewDocumentButton = () => {
  // Onclick -> Create a new document
  // Create a new document in the database
  // Redirect to the new document
  return (
    <button className=" bg-color-orange hover:bg-color-orange-hover px-4 py-3 flex items-center gap-2 rounded-[4px] text-color-100 ">
      + New Document
    </button>
  );
};

export default NewDocumentButton;
