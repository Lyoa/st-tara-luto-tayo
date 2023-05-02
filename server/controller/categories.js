const categoryService = require('../service/categories')

class CategoryController {
    async listCategories() {
        return await categoryService.listCategories()
    }
    async getAllCategories(filter) {
        return await categoryService.getAllCategories(filter)
    }

    async getCategoriesById(id) {
        return await categoryService.getCategoriesById(id)
    }

    async createCategory(category) {
        return await categoryService.createCategory(category)
    }

    async updateCategory(category) {
        return await categoryService.updateCategory(category)
    }

    async deleteCategory(id) {
        return await categoryService.deleteCategory(id)
    }
}

module.exports = new CategoryController()
