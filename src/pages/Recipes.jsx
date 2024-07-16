import { useState, useEffect, useCallback, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import ViewRecipeButton from "../components/ViewRecipeButton";
import { FaCirclePlay } from "react-icons/fa6";
import Header from "../components/Header";

const Recipes = () => {
  const [query, setQuery] = useState(null);
  const [message, setMessage] = useState(
    "Type any dish name into the search bar to find a delicious and up-to-date recipe."
  );
  const [searchInput, setSearchInput] = useState("");
  const [fullSentence, setFullSentence] = useState(false);

  const handleSearch = useCallback(async () => {
    if (searchInput.length === 0) {
      return setMessage("Type dish name to search recipe🧐");
    }
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      );
      if (!res.ok) {
        setMessage("Not found meal");
        throw new Error("Something went wrong!");
      } else {
        const { meals } = await res.json();
        setQuery(meals[0] || null);
      }
    } catch (err) {
      console.error(err.message);
    }
  }, [searchInput]);

  useEffect(() => {
    if (searchInput.length === 0) {
      setQuery(null);
    }
  }, [searchInput]);

  const ingredients = useMemo(() => {
    if (!query) return [];
    return [
      query.strIngredient1,
      query.strIngredient2,
      query.strIngredient3,
      query.strIngredient4,
      query.strIngredient5,
      query.strIngredient6,
      query.strIngredient7,
      query.strIngredient8,
      query.strIngredient9,
      query.strIngredient10,
      query.strIngredient11,
      query.strIngredient12,
      query.strIngredient13,
      query.strIngredient14,
      query.strIngredient15,
      query.strIngredient16,
      query.strIngredient17,
      query.strIngredient18,
      query.strIngredient19,
      query.strIngredient20,
    ];
  }, [query]);

  return (
    <>
      <Header index="1" />
      <div className="min-h-[530px]">
        <form
          className="flex items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            required
            className="border border-black rounded-2xl pl-2 mr-2 w-2/5 min-w-64 h-9 outline-none"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="Search recipe"
            type="text"
            id="search"
          />
          <label htmlFor="search">
            <FaSearch className="text-xl cursor-pointer" onClick={handleSearch} />
          </label>
        </form>
        {query? (
          <>
            <section className="flex-1 grow">
              <div className="my-10">
                <div className="flex w-full gap-4 max-md:flex-col">
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
                      {ingredients.map(
(ingredient, i) =>
                          ingredient && (
                            <p key={i}>
                              {ingredient}: {query[`strMeasure${i + 1}`]}
                            </p>
                          )
                      )}
                    </div>
                    <div className="mt-2">
                      <a target="_blank" href={query.strYoutube}>
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
        ) : (
          <p className="text-center mt-5 font-medium max-w-80 mx-auto">
            {message}
          </p>
        )}
      </div>
    </>
  );
};

export default Recipes;