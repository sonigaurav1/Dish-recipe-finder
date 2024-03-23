import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import ViewRecipeButton from "../components/ViewRecipeButton";
import { FaCirclePlay } from "react-icons/fa6";

const Recipes = () => {
  const [query, setQuery] = useState([]);
  const [message, setMessage] = useState(
    "Type any dish name into the search bar to find a delicious and up-to-date recipe."
  );
  const [searchInput, setSearchInput] = useState("");
  const [fullSentence, setFullSentence] = useState(false);
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
    if (searchInput.length == 0) {
      setQuery([]);
    }
  }, [searchInput]);

  const handleSearch = async () => {
    if (searchInput.length == 0) {
      return setMessage("Type dish name to search recipe🧐");
    }
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      );
      if (!res.ok) {
        setMessage("Not found meal")
        throw new Error("Something went wrong!");
      } else {
        const { meals } = await res.json();
        setQuery(meals[0] || []);
        console.log(meals[0]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="w-full mb-10">
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          required
          className="border border-black rounded-2xl pl-2 mr-2 w-2/5 h-9 outline-none"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Search recipe"
          type="text"
          id="search"
        />
        <label htmlFor="search">
          <FaSearch className="text-xl" onClick={handleSearch} />
        </label>
      </form>
      {query.length == 0 ? (
        <p className="text-center mt-5 font-medium max-w-80 mx-auto">{message}</p>
      ) : (
        <>
          <section>
            <div className="my-10">
              <div className="flex w-full gap-4">
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
                        View Recipes <FaCirclePlay />
                      </ViewRecipeButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Recipes;
