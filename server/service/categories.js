const categoryRepository = require('../repository/categories')

class CategoryService {
    async listCategories() {
        return await categoryRepository.listCategories()
    }
}

module.exports = new CategoryService()
