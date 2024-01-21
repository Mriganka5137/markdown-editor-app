import React from "react";
interface Props {
  params: {
    id: string;
  };
}

const page = ({ params: { id } }: Props) => {
  return (
    <div className=" container mx-auto  bg-red-600  border-white ">
      page {id}
    </div>
  );
};

export default page;
