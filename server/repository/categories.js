const { connect } = require('../config/db')
// const bcrypt = require('bcryptjs')
// const categories = require('../model/categories')

class CategoryRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // CREATE
    async createCategory(category) {
        try {
            const createdCategory = await this.db.categories.create(category)
            return createdCategory
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    // READ
    async getAllCategories(filter) {
        try {
            console.log('Getting Categories in the Repository')
            const categories = this.db.categories.findAll({
                where: filter,
                order: [['id', 'ASC']],
            })
            console.log('Find all values: ', categories)
            return categories
        } catch (error) {
            console.log('There is an error getting Categories', error)
            return []
        }
    }

    // Get by ID
    async getCategoriesById(id) {
        try {
            const categories = await this.db.categories.findByPk(id)
            if (!categories) {
                console.log('Categories not found')
            } else {
                console.log('Categories found')
            }
            return categories
        } catch (error) {
            console.error('Error in getting Categories', error)
            return null
        }
    }

    // UPDATE
    async updateCategory(category) {
        let data = {}

        try {
            data = await this.db.category.update(
                { ...category },
                {
                    where: {
                        id: category.id,
                    },
                }
            )
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }

    // DELETE
    async deleteCategory(id) {
        try {
            const result = await this.db.categories.destroy({
                where: { id: id },
            })
            if (result === 1) {
                console.log(`Category with id ${id} deleted successfully.`)
                return true
            } else {
                console.log(`Category with id ${id} not found.`)
                return false
            }
        } catch (error) {
            console.log('Error deleting Category', error)
            return false
        }
    }
    // async listCategories() {
    //     try {
    //         console.log('Getting Categories in the Repository')
    //         const categories = await this.db.categories.findAll({
    //             where: {
    //                 category_id: null,
    //             },
    //         })
    //         console.log('Find all values: ', categories)
    //         return categories
    //     } catch (error) {
    //         console.log('There is an error getting categories', error)
    //         return []
    //     }
    // }
}

module.exports = new CategoryRepository()
