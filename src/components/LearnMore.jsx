import React from "react";
import Image from "../images/learnmore.webp";
import ViewRecipeButton from "./ViewRecipeButton";

const LearnMore = () => {
  return (
    <section>
      <div className="w-full lg:h-[80vh] overflow-hidden flex flex-col lg:flex-row my-20  ">
        <div className="lg:p-8 mb-5 lg:pr-44 lg:h-full lg:w-[55%] w-full ">
            <h1 className="text-5xl font-medium">Everyone Can Be A Chef In Their Own Kitchen</h1>
            <p className="lg:my-10 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio qui et sit? Blanditiis odit pariatur expedita similique distinctio inventore vero. Placeat necessitatibus quas exercitationem.</p>
            <ViewRecipeButton>Learn More</ViewRecipeButton>
        </div>
        <div className="lg:w-[45%] h-96 lg:h-full">
          <img loading="lazy" className="object-cover" src={Image} alt="chicken wings" />
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
