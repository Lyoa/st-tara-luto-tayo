const userRepository = require('../repository/users')

class UserService {
    async getAllUsers() {
        return await userRepository.getAllUsers()
    }

    async getUsersById(user) {
        return await userRepository.getUsersById(user)
    }

    // CREATE
    async createUser(user) {
        return await userRepository.createUser(user)
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