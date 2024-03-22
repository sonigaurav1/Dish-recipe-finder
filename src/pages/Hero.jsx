import React from "react";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import DeliciousRecipe from "../components/DeliciousRecipe";
import HotRecipe from "../components/HotRecipe";
import LearnMore from "../components/LearnMore";
import { fetchRecipe } from "../_lib/fetchRecipe";
import { IndianDish } from "../_lib/indianDish";
import { CanadianDish } from "../_lib/CanadianDish";

const Hero = () => {
  const [indianDish, setIndianDish] = useState(IndianDish);
  const [canadianDish, setCanadianDish] = useState(CanadianDish);

  // useEffect(() => {
  //   const data = fetchRecipe("a","indian");
  //   console.log(data)
  //   setQuery(data);
  // }, []);

  // useEffect(() => {
  //   console.log(query);
  // },[query]);

  return (
    <>
      {/* <Header /> */}
      {/* <div className="flex sm:overflow-auto lg:overflow-hidden mx-20">
          <HotRecipe />
          <HotRecipe />
        </div> */}
      <HotRecipe />
      <Categories />
      <div className="mt-10">
        <h1 className="text-center text-5xl text-medium">
          Simple And Tasty Recipes
        </h1>
        <p className="text-center text-gray-500">
        If you're looking for some delicious and easy-to-make recipes, you've come to the right place.
        </p>
      </div>
      <section className="grid grid-cols-4 gap-16 mt-8">
        {canadianDish.length == 0 ? (
          <p>No Dish Available</p>
        ) : (
          canadianDish.map(({ strMeal, strMealThumb, idMeal }) => {
            return (
              <DeliciousRecipe
                image={strMealThumb}
                name={strMeal}
                key={idMeal}
              />
            );
          })
        )}
      </section>
      <LearnMore />
      <div>
        <h1 className="text-center text-5xl text-medium">
          Try This Delicious Recipe To Make Your Day.
        </h1>
        <p className="text-center text-gray-500">
        If you're looking for some delicious and easy-to-make recipes, you've come to the right place.
        </p>
      </div>
      <section className="grid grid-cols-4 gap-16 mt-8">
        {indianDish.length == 0 ? (
          <p>No Dish Available</p>
        ) : (
          indianDish.map(({ strMeal, strMealThumb, idMeal }) => {
            return (
              <DeliciousRecipe
                image={strMealThumb}
                name={strMeal}
                key={idMeal}
              />
            );
          })
        )}
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Hero;
