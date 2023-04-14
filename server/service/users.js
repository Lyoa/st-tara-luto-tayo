const userRepository = require('../repository/users')

class UserService {
    async getUsers() {
        return await userRepository.getUsers()
    }

    async getUsersById(user) {
        return await userRepository.getUsersById(user)
    }

    // CREATE
    async createUser(customer) {
        return await userRepository.createUser(customer)
    }

    // UPDATE
    async updateUser(user) {
        return await userRepository.updateUser(user)
    }

    // DELETE
    async deleteUser(userId) {
        return await userRepository.deleteUser(userId)
    }
}

module.exports = new UserService()