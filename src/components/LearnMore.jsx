import React from "react";
import Image from "../images/learnmore.avif";
import ViewRecipeButton from "./ViewRecipeButton";

const LearnMore = () => {
  return (
    <section>
      <div className="w-full h-[80vh] overflow-hidden flex my-20 ">
        <div className="p-8 pr-44  h-full w-[55%] ">
            <h1 className="text-5xl font-medium">Everyone Can Be A Chef In Their Own Kitchen</h1>
            <p className="my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio qui et sit? Blanditiis odit pariatur expedita similique distinctio inventore vero. Placeat necessitatibus quas exercitationem.</p>
            <ViewRecipeButton>Learn More</ViewRecipeButton>
        </div>
        <div className="w-[45%] h-full">
          <img className="object-cover" src={Image} alt="chicken wings" />
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
