const RECIPE_API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

function getRecipes(ingredients) {
  return fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=8&apiKey=${RECIPE_API_KEY}`,
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

function getRandomRecipes() {
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
}

function getRecipeById(id) {
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

export { getRecipes, getRandomRecipes, getRecipeById };
