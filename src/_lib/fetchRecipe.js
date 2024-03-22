
export const fetchRecipe = async (type, search) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${search}`
    );
    if (!res.ok) {
      throw new Error("Something went wrong!");
    } else {
      const { meals } = await res.json();
      // console.log(meals)
      return meals;
    }
  } catch (err) {
    console.error(err.message);
  }
};