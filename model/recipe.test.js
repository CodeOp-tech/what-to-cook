const {
    isIngredientNonVegan,
    areIngredientsVegan,
    isRecipeVegan
} = require('./recipe')

const NON_VEGAN_INGREDIENT = {
    "aisle": "Milk, Eggs, Other Dairy",
}

const VEGAN_INGREDIENT = {
    "aisle": "Spices and Seasonings",
}

const VEGAN_RECIPE = {
    "aisle": "Milk, eggs, butter"
}

describe('model/recipe', () => {
    describe(isIngredientNonVegan, () => {
        it('returns true for non vegan ingredients', () => {
            expect(isIngredientNonVegan(NON_VEGAN_INGREDIENT)).toBe(true)
        })

        it('returns false for vegan ingredients', () => {
            expect(isIngredientNonVegan(VEGAN_INGREDIENT)).toBe(false)
        })
    })

    describe(areIngredientsVegan, () => {
        it('returns true for all-vegan ingredients', () => {
            const allIngredients = [
                VEGAN_INGREDIENT,
                VEGAN_INGREDIENT
            ]
            expect(areIngredientsVegan(allIngredients)).toBe(true)
        })

        it('returns false if any ingredient is not vegan', () => {
            const allIngredients = [
                NON_VEGAN_INGREDIENT,
                NON_VEGAN_INGREDIENT,
                VEGAN_INGREDIENT
            ]  
            expect(areIngredientsVegan(allIngredients)).toBe(false)
        })
    })

    describe(isRecipeVegan, () => {
        it('returns true if recipe not have this ingredients', () => {
            const allIngredients = [
                VEGAN_RECIPE,
            ]
            expect(isRecipeVegan(allIngredients)).toBe(true)
        })
        it('returns false if recipe has this ingredients', () => {
            const allIngredients = [
                VEGAN_RECIPE
            ]
            expect(isRecipeVegan(allIngredients)).toBe(false)
        })
    })
})

