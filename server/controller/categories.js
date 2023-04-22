const categoryService = require('../service/categories')

class CategoryController {
    async listCategories() {
        return await categoryService.listCategories()
    }
}

module.exports = new CategoryController()
