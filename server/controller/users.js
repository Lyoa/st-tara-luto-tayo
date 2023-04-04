const userService = require('../service/users')

class UserController {
    async getUsers() {
        return await userService.getUsers()
        // const data = {'message': 'Passed'}
        // return data
    }
}

module.exports = new UserController()
