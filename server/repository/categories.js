const { connect } = require('../config/db')
// const bcrypt = require('bcryptjs')
// const categories = require('../model/categories')

class CategoryRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async listCategories() {
        try {
            console.log('Getting Categories in the Repository')
            const categories = await this.db.categories.findAll({
                where: {
                    category_id: null,
                },
            })
            console.log('Find all values: ', categories)
            return categories
        } catch (error) {
            console.log('There is an error getting categories', error)
            return []
        }
    }
}

module.exports = new CategoryRepository()
