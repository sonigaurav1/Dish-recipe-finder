import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe } from "../_lib/fetchRecipe.js";
import DeliciousRecipe from "../components/DeliciousRecipe.jsx";
import Loading from "../components/Loading.jsx";

const CatogoriesPage = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setCategories([]);
      setIsLoading(true);
      const data = await fetchRecipe("c", category);
      setError();
      setCategories(await data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <Loading/>
      </section>
    );
  }
  if (error) {
    <section>
      <p>{error}</p>
    </section>;
  }

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-16 max-sm:gap-6 mt-8">
      {!isLoading &&
        categories.map(({ strMeal, strMealThumb, idMeal }) => {
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
  );
};

export default CatogoriesPage;
