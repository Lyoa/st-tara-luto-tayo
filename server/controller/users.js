const userService = require('../service/users')

class UserController {
    async getUsers() {
        return await userService.getUsers()
    }

    async getUsersById(user) {
        return await userService.getUsersById(user)
    }

    async createUser(customer) {
        return await userService.createUser(customer)
    }

    async updateUser(user) {
        return await userService.updateUser(user)
    }

    async deleteUser(id) {
        return await userService.deleteUser(id)
    }
}

module.exports = new UserController()