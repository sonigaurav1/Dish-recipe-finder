import React from "react";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import DeliciousRecipe from "../components/DeliciousRecipe";
import HotRecipe from "../components/HotRecipe";
import LearnMore from "../components/LearnMore";
import { fetchRecipe } from "../_lib/fetchRecipe";
import Loading from "../components/Loading";
import Header from "../components/Header";

const Hero = () => {
  const [indianDish, setIndianDish] = useState([]);
  const [canadianDish, setCanadianDish] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setCanadianDish([]);
      setIsLoading(true);
      const data = await fetchRecipe("a", "canadian");
      setError();
      setCanadianDish(await data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIndianDish([]);
      setIsLoading(true);
      const data = await fetchRecipe("a", "indian");
      setError();
      setIndianDish(await data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header/>
      <HotRecipe />
      <Categories />
      <section>
        <div className="mt-10">
          <h1 className="text-center text-5xl text-medium">
            Simple And Tasty Recipes
          </h1>
          <p className="text-center text-gray-500">
            If you're looking for some delicious and easy-to-make recipes,
            you've come to the right place.
          </p>
        </div>
      </section>
      <section>
        {isLoading && (
          <div className="mt-10">
            <Loading />
          </div>
        )}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-16 mt-8">
        {!isLoading &&
          canadianDish.map(({ strMeal, strMealThumb, idMeal }) => {
            return (
              <DeliciousRecipe
                id={idMeal}
                image={strMealThumb}
                name={strMeal}
                key={idMeal}
              />
            );
          })}
      </section>
      <LearnMore />
      <section>
        <h1 className="text-center text-5xl text-medium">
          Try This Delicious Recipe To Make Your Day.
        </h1>
        <p className="text-center text-gray-500">
          If you're looking for some delicious and easy-to-make recipes, you've
          come to the right place.
        </p>
      </section>
      <section>
        {isLoading && (
          <div className="mt-10">
            <Loading />
          </div>
        )}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-16 mt-8">
        {!isLoading &&
          indianDish.map(({ strMeal, strMealThumb, idMeal }) => {
            return (
              <DeliciousRecipe
                id={idMeal}
                image={strMealThumb}
                name={strMeal}
                key={idMeal}
              />
            );
          })}
      </section>
    </>
  );
};

export default Hero;
