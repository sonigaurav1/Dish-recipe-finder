import React, { useEffect, useState } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      const { categories } = data;
      setCategories(await categories);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(categories);
  //   console.log(typeof categories);
  // }, [categories]);

  return (
    <section>
      <div className="my-6">
        <div className="flex justify-between my-4">
          <h1 className="text-5xl font-bold">Catogories</h1>
          <button className="text-black bg-blue-200 py-2 px-4 rounded-lg">
            View All Catogories
          </button>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {categories?.length > 0
            ? categories.map(
                ({ idCategory, strCategory, strCategoryThumb }, index) => {
                  if (index > 5) {
                    return;
                  } else {
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
              )
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};

export default Categories;
