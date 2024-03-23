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
      <div className="w-full  lg:h-[80vh] overflow-hidden rounded-3xl flex flex-col-reverse lg:flex-row mb-10 ">
        <div className="lg:p-8 p-6 lg:pr-32 bg-blue-200 h-1/2 lg:h-full lg:w-[55%] flex justify-between flex-col">
          <div>
            <span className="flex items-center max-w-max bg-white lg:py-2 lg:px-4 py-1 px-3 rounded-3xl gap-1 shadow-2xl  ">
              <img className="w-4 h-5" src={OldPaper} alt="old paper" />
              Hot Recipes
            </span>
            <h1 className="lg:text-6xl text-xl font-medium lg:my-8 mb-1 mt-4 leading-tight">
              Spicy Delicious Chicken Wings.
            </h1>
            <p>
              These sweet and spicy sriracha baked chicken wings are a delicious
              and easy-to-make appetizer. The wings are coated in a flavorful
              honey-sriracha sauce and baked until crispy. They're the perfect
              combination of sweet and spicy, and are sure to be a hit at any
              party.
            </p>
            <div className="flex space-x-4 lg:my-8 my-2 mb-6">
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
                <span className="mr-1">View Recipes</span> <FaCirclePlay />
              </ViewRecipeButton>
            </a>
          </div>
        </div>
        <div className="lg:w-[45%] h-60 lg:h-full overflow-hidden lg:overflow-none relative">
          <img
            className="w-full lg:h-full hotRecipeImage "
            src={ChickenWings}
            alt="chicken wings"
          />
        </div>
      </div>
    </section>
  );
};

export default HotRecipe;
