import React from "react";

const Category = ({image, category}) => {
  return (
    <div className="min-w-44 min-h-44 p-4 rounded-3xl overflow-hidden relative ">
      <img className="rounded-xl" src={image} alt="" />
      <p className="absolute font-medium bottom-4 left-1/2 -translate-x-1/2 z-10 text-black">
        {category}
      </p>
    </div>
  );
};

export default Category;
