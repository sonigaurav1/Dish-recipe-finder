import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="rounded-full border-t-2 border-red-600 max-w-12 mx-auto animate-spin ">
      <AiOutlineLoading className="animate-spin text-5xl text-blue-500 rounded-full border-t-2 border-red-600" />
    </div>
  );
};

export default Loading;
