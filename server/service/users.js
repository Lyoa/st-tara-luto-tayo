const userRepository = require('../repository/users')

class UserService {
    async getUsers() {
        return await userRepository.getUsers()
    }
}

module.exports = new UserService()
