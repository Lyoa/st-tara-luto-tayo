const userService = require('../service/users')

class UserController {
    async getAllUsers() {
        return await userService.getAllUsers()
    }

    async getUsersById(user) {
        return await userService.getUsersById(user)
    }

    async createUser(user) {
        return await userService.createUser(user)
    }

    async updateUser(user) {
        return await userService.updateUser(user)
    }

    async deleteUser(id) {
        return await userService.deleteUser(id)
    }
}

module.exports = new UserController()