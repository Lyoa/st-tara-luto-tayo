const categoryRepository = require('../repository/categories')

class CategoryService {
    async getAllCategories(filter) {
        return await categoryRepository.getAllCategories(filter)
    }
    // CREATE
    async createCategory(category) {
        return await categoryRepository.createCategory(category)
    }

    // UPDATE
    async updateCategory(category) {
        return await categoryRepository.updateCategory(category)
    }

    // DELETE
    async deleteCategory(id) {
        return await categoryRepository.deleteCategory(id)
    }

    async getCategoriesById(id) {
        return await categoryRepository.getCategoriesById(id)
    }
}

module.exports = new CategoryService()
