import React, { useState, useEffect } from "react";
import ViewRecipeButton from "../components/ViewRecipeButton";
import { FaCirclePlay } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Recipe = () => {
  const { id } = useParams();
  const [query, setQuery] = useState([]);
  const [fullSentence, setFullSentence] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  } = query;
  const {
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  } = query;
  const { strYoutube } = query;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (!response.ok) {
          throw new Error("Could not get data.");
        } else {
          setError();
          const data = await response.json();
          const { meals } = data;
          setQuery(await meals[0]);

        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
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
    return (
      <section>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <div className="mb-10">
      {!isLoading && (
        <section>
          <div className="lg:my-10">
            <div className="flex flex-col w-full gap-4 space-y-4">
              <div className="min-w-80 ">
                <img
                  className="aspect-square size-80 rounded-xl "
                  src={query.strMealThumb}
                  alt=""
                />
                <h2 className="text-3xl">{query.strMeal}</h2>
                <p>Category: {query.strCategory}</p>
                <p>Area: {query.strArea}</p>
              </div>
              <div>
                <h2 className="text-3xl"> Instructions</h2>
                <p
                  onClick={() => {
                    setFullSentence(!fullSentence);
                  }}
                  className="cursor-pointer "
                >
                  {fullSentence
                    ? query.strInstructions
                    : query.strInstructions.slice(0, 500) + "..."}
                </p>
              </div>
              <div>
                <h1 className="text-3xl">Ingredients</h1>
                <div className="grid grid-cols-2">
                  <p>
                    {" "}
                    {strIngredient1}: {strMeasure1}
                  </p>
                  <p>
                    {" "}
                    {strIngredient2}: {strMeasure2}
                  </p>
                  <p>
                    {" "}
                    {strIngredient3}: {strMeasure3}
                  </p>
                  <p>
                    {" "}
                    {strIngredient4 && (
                      <>
                        {strIngredient4}: {strMeasure4}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient5 && (
                      <>
                        {strIngredient5}: {strMeasure5}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient6 && (
                      <>
                        {strIngredient6}: {strMeasure6}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient7 && (
                      <>
                        {strIngredient7}: {strMeasure7}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient8 && (
                      <>
                        {strIngredient8}: {strMeasure8}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient9 && (
                      <>
                        {strIngredient9}: {strMeasure9}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient10 && (
                      <>
                        {strIngredient10}: {strMeasure10}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient11 && (
                      <>
                        {strIngredient11}: {strMeasure11}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient12 && (
                      <>
                        {strIngredient12}: {strMeasure12}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient13 && (
                      <>
                        {strIngredient13}: {strMeasure13}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient14 && (
                      <>
                        {strIngredient14}: {strMeasure14}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient15 && (
                      <>
                        {strIngredient15}: {strMeasure15}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient16 && (
                      <>
                        {strIngredient16}: {strMeasure16}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient17 && (
                      <>
                        {strIngredient17}: {strMeasure17}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient18 && (
                      <>
                        {strIngredient18}: {strMeasure18}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient19 && (
                      <>
                        {strIngredient19}: {strMeasure19}
                      </>
                    )}
                  </p>
                  <p>
                    {" "}
                    {strIngredient20 && (
                      <>
                        {strIngredient20}: {strMeasure20}
                      </>
                    )}
                  </p>
                </div>
                <div className="mt-2">
                  <a target="_blank" href={strYoutube}>
                    <ViewRecipeButton>
                      <span className="mr-1">View Recipes</span> <FaCirclePlay />
                    </ViewRecipeButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Recipe;
