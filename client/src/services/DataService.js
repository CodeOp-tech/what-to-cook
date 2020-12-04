import oneRecipe from "./DummyData1";
const RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

function getRecipes(ingredients) {
  console.log("Fetching recipes for ", ingredients);
  // for production purposes

  return fetch(
    `api/recipes?ingredients=${ingredients}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  // for development purposes

  // return new Promise((resolve, reject) => resolve(recipes));
}

function getRandomRecipe() {
  console.log("Fetching random recipe");

  // for production purposes

  return fetch(
    `https://api.spoonacular.com/recipes/random?number=1&apiKey=${RECIPE_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  //for development purposes

  // return new Promise((resolve, reject) => resolve(oneRecipe));
}

function getRecipeById(id) {
  console.log("Fetching recipe ", id);
  return fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${RECIPE_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}

export { getRecipes, getRandomRecipe, getRecipeById };
