import React, { useEffect } from "react";
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const DeliciousRecipe = ({ name, image, id, onClick }) => {
  return (
    <Link to={`recipe/${id}`} >
      <article onClick={onClick}>
        <div>
          <div className="overflow-hidden rounded-3xl">
            <img loading="lazy" className="min-w-60" src={image} alt="" />
          </div>
          <h2 className="font-bold p-1 text-2xl text-center mx-auto cursor-pointer max-w-max hover:text-orange-400">
            {name}
          </h2>
          <div className="flex mx-auto max-w-max space-x-6 lg:mt-4 mt-2">
            <span className="flex">
              <PiTimerFill className="text-xl" />
              30 Minutes
            </span>
            <span className="flex">
              <PiForkKnifeFill className="text-xl" />
              Chicken
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default DeliciousRecipe;
