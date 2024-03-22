import React from "react";
import Salad from "../images/Salad.svg";
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";

const DeliciousRecipe = ({name,image}) => {

  return (
    <article>
      <div className="min-w-60 max-h-60 overflow-hidden rounded-3xl">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <h2 className="font-bold p-1 ">
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
    </article>
  );
};

export default DeliciousRecipe;