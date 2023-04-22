const { connect } = require('../config/db')
const bcrypt = require('bcryptjs')

class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // READ
    async getAllUsers() {
        try {
            console.log('Getting Users in the Repository')
            const users = this.db.users.findAll({
                order: [['id', 'ASC']],
            })
            console.log('Find all values: ', users)
            return users
        } catch (error) {
            console.log('There is an error getting users', error)
            return []
        }
    }

    // Get by ID
    async getRecipeById(id) {
        try {
            const user = await this.db.users.findByPk(id)
            if (!user) {
                console.log('User not found')
            } else {
                console.log('User found')
            }
            return user
        } catch (error) {
            console.error('Error in getting user', error)
            return null
        }
    }
}

module.exports = new UserRepository()
