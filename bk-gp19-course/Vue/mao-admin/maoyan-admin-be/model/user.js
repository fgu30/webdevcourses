const { Users } = require('../utils/db')

const findOne = (username) => {
  return Users.findOne({username})
}

const signup = (data) => {
  const users = new Users(data)
  return users.save()
}

module.exports = {
  signup,
  findOne
}