const { connect } = require('../config/db')

class RecipeRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // CREATE
    async createRecipe(recipe) {
        try {
            const createdRecipe = await this.db.recipes.create(recipe)
            return createdRecipe
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    // READ
    async getAllRecipes() {
        try {
            console.log('Getting Recipes in the Repository')
            const recipes = this.db.recipes.findAll({
                order: [['id', 'ASC']],
            })
            console.log('Find all values: ', recipes)
            return recipes
        } catch (error) {
            console.log('There is an error getting recipes', error)
            return []
        }
    }

    // Get by ID
    async getRecipeById(id) {
        try {
            const recipes = await this.db.recipes.findByPk(id)
            if (!recipes) {
                console.log('Recipes not found')
            } else {
                console.log('Recipes found')
            }
            return recipes
        } catch (error) {
            console.error('Error in getting recipes', error)
            return null
        }
    }

    // UPDATE
    async updateRecipe(recipe) {
        let data = {}

        try {
            data = await this.db.recipe.update(
                { ...recipe },
                {
                    where: {
                        id: recipe.id,
                    },
                }
            )
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }

    // DELETE
    async deleteRecipe(id) {
        try {
            const result = await this.db.recipe.destroy({ where: { id: id } })
            if (result === 1) {
                console.log(`recipe with id ${id} deleted successfully.`)
                return true
            } else {
                console.log(`Recipe with id ${id} not found.`)
                return false
            }
        } catch (error) {
            console.log('Error deleting recipe', error)
            return false
        }
    }
}

module.exports = new RecipeRepository()
