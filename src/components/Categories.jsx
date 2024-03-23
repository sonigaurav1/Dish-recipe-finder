import React, { useEffect, useState } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [allCategories, setAllCategories] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (!response.ok) {
          throw new Error("Could not get data.");
        } else {
          setError();
          const data = await response.json();
          const { categories } = data;
          setCategories(await categories);
          console.log(data);
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

  // if (isLoading) {
  //   return <section>Loading...</section>;
  // }

  if (error) {
    return <section>{error}</section>;
  }

  return (
    <section>
      <div className="my-6">
        <div className="flex justify-between my-4">
          <h1 className="lg:text-5xl text-2xl font-bold">Catogories</h1>
          <button onClick={()=>{setAllCategories(!allCategories)}} className="text-black bg-blue-200 py-2 px-4 rounded-lg max-w-max">
            View All Catogories
          </button>
        </div>
        <div className="lg:grid-cols-6 grid grid-cols-2 gap-8 ">
          {!isLoading ?
            categories.map(
              ({ idCategory, strCategory, strCategoryThumb }, index) => {
                if (allCategories) {
                  return (
                    <Link to={`/categories/${strCategory}`} key={idCategory}>
                      <Category
                        key={idCategory}
                        image={strCategoryThumb}
                        category={strCategory}
                      />
                    </Link>
                  );
                } else {
                  if (index < 6) {
                    return (
                      <Link to={`/categories/${strCategory}`} key={idCategory}>
                        <Category
                          key={idCategory}
                          image={strCategoryThumb}
                          category={strCategory}
                        />
                      </Link>
                    );
                  }
                }
              }
            ): 
            <p>Loading...</p>
            }
        </div>
      </div>
    </section>
  );
};

export default Categories;
