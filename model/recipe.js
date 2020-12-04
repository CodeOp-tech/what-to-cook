const nonVeganIngredientsAisles = [
    "Milk, Eggs, Other Dairy"
]

const isIngredientNonVegan = ingredient => {
    return nonVeganIngredientsAisles.includes(ingredient.aisle)
}

const areIngredientsVegan = ingredientList => {
    const isThereAnyNonVeganIngredient = ingredientList.some((ingredient) => {
        return isIngredientNonVegan(ingredient)
    })
    return !isThereAnyNonVeganIngredient
}

const isRecipeVegan = recipe => {
    const areUsedIngredientsVegan = areIngredientsVegan(recipe.usedIngredients)
    const areMissedIngredientsVegan = areIngredientsVegan(recipe.missedIngredients)

    return areUsedIngredientsVegan && areMissedIngredientsVegan
}

module.exports = {
    isIngredientNonVegan,
    areIngredientsVegan,
    isRecipeVegan
}