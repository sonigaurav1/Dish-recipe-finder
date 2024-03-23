import React from "react";
import OldPaper from "../images/old_paper.webp";
import ChickenWings from "../images/chicken_wings.webp";
import PostAuthor from "./PostAuthor";
import ViewRecipeButton from "./ViewRecipeButton";
import GrayButton from "./GrayButton";
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaCirclePlay } from "react-icons/fa6";

const HotRecipe = () => {
  return (
    <section>
      <div className="w-full h-[80vh] overflow-hidden rounded-3xl flex my-6 ">
        <div className="p-8 pr-32 bg-blue-200 h-full w-[55%] flex justify-between flex-col">
          <div>
            <span className="flex items-center w-36 bg-white py-2 px-4 rounded-3xl gap-1 shadow-2xl  ">
              <img className="w-4 h-5" src={OldPaper} alt="old paper" />
              Hot Recipes
            </span>
            <h1 className="text-6xl font-medium my-8 leading-tight">
              Spicy Delicious Chicken Wings.
            </h1>
            <p>
              These sweet and spicy sriracha baked chicken wings are a delicious
              and easy-to-make appetizer. The wings are coated in a flavorful
              honey-sriracha sauce and baked until crispy. They're the perfect
              combination of sweet and spicy, and are sure to be a hit at any
              party.
            </p>
            <div className="flex gap-4 my-8">
              <GrayButton>
                <PiTimerFill className="text-xl" />
                30 Minutes
              </GrayButton>
              <GrayButton>
                <PiForkKnifeFill className="text-xl" />
                Chicken
              </GrayButton>
            </div>
          </div>
          <div className="flex justify-between">
            <PostAuthor />
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=kJWwOgclXwE&pp=ygUeU3BpY3kgRGVsaWNpb3VzIENoaWNrZW4gV2luZ3Mu"
            >
              <ViewRecipeButton>
                View Recipes <FaCirclePlay />
              </ViewRecipeButton>
            </a>
          </div>
        </div>
        <div className="w-[45%] h-full">
          <img
            className=" object-cover"
            src={ChickenWings}
            alt="chicken wings"
          />
        </div>
      </div>
    </section>
  );
};

export default HotRecipe;
