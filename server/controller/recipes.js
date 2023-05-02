const recipeService = require('../service/recipes')

class RecipeController {
    async getAllRecipes() {
        return await recipeService.getAllRecipes()
    }

    async getRecipesById(id) {
        return await recipeService.getRecipesById(id)
    }

    async createRecipe(recipe) {
        return await recipeService.createRecipe(recipe)
    }

    async updateRecipes(recipe) {
        return await recipeService.updateRecipes(recipe)
    }

    async deleteRecipes(id) {
        return await recipeService.deleteRecipes(id)
    }
}

module.exports = new RecipeController()
