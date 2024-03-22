import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe } from "../_lib/fetchRecipe.js";

const CatogoriesPage = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = fetchRecipe("c",category);
    console.log(typeof data)
    setCategories(data);
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <section>
      {categories?.length > 0 ? (
        categories.map(({ strMeal, strMealThumb, idMeal }) => {
          return <li>{strMeal}</li>;
        })
      ) : (
        <p>No recipes found in this category</p>
      )}
    </section>
  );
};

export default CatogoriesPage;
