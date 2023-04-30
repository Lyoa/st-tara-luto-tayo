const recipeRepository = require('../repository/recipes')

class RecipeService {
    async listCategories() {
        return await recipeRepository.listRecipe()
    }
}

module.exports = new RecipeService()
