const { connect } = require('../config/db')

class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // CREATE
    async getUsers() {
        try {
            console.log('Getting Users in the Repository')
            const users = this.db.users.findAll({
                order: [['id', 'ASC']],
            })
            console.log("Find all values: ", users)
            return users
        } catch (error) {
            console.log('There is an error getting users', error)
            return []
        }
    }
}

module.exports = new UserRepository()
