const { connect } = require('../config/db')
const bcrypt = require('bcryptjs')

class UserRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    // CREATE
    async createUser(user) {
      let userData = {}
    
      try {
        const password = user.password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        
        userData = { ...user, password: hashedPassword }
        const createdUser = await this.db.users.create(userData)
        return createdUser
      } catch (error) {
        console.log('Error: ', error)
      }
    }

    // READ
    async getAllUsers() {
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

  // Get by usersID
  async getUsersById(id) {
    try {
      const user = await this.db.users.findByPk(id);
      if (!user) {
        console.log('User not found');
      } else {
        console.log('User found');
      }
      return user;
    } catch (error) {
      console.error('Error in getting user', error);
      return null;
    }
  }

    // UPDATE
    async updateUser(user) {
      let data = {}

      try {
          data = await this.db.users.update(
              { ...user },
              {
                  where: {
                      id: user.id,
                  },
              }
          )
      } catch (error) {
          console.log('Error: ', error)
      }
      return data
  }

    // DELETE
    async deleteUser(id) {
        try {
          const result = await this.db.users.destroy({ where: { id: id } })
          if (result === 1) {
            console.log(`User with id ${id} deleted successfully.`)
            return true
          } else {
            console.log(`User with id ${id} not found.`)
            return false
          }
        } catch (error) {
          console.log('Error deleting user', error)
          return false
        }
      }
}

module.exports = new UserRepository()
