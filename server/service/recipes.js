const recipeRepository = require('../repository/recipes')

class RecipeService {
    async getAllRecipes() {
        return await recipeRepository.getAllRecipes()
    }

    // CREATE
    async createRecipe(recipe) {
        return await recipeRepository.createRecipe(recipe)
    }

    // UPDATE
    async updateRecipe(recipe) {
        return await recipeRepository.updateRecipe(recipe)
    }

    // DELETE
    async deleteRecipe(id) {
        return await recipeRepository.deleteRecipe(id)
    }

    async getRecipesById(id) {
        return await recipeRepository.getRecipesById(id)
    }
}
module.exports = new RecipeService()
