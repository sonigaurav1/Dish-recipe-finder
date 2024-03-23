import React from "react";
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const DeliciousRecipe = ({ name, image, id }) => {
  return (
    <Link to={`recipe/${id}`} >
      <article>
        <div>
          <div className="overflow-hidden rounded-3xl">
            <img loading="lazy" className="min-w-60" src={image} alt="" />
          </div>
          <h2 className="font-bold p-1 cursor-pointer max-w-max hover:text-orange-400">
            {name}
          </h2>
          <div className="flex gap-6 mt-4">
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
