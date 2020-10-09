const { Movies } = require('../utils/db')

const add = (data) => {
  const users = new Movies(data)
  return users.save()
}

const findall = async () => {
  return await Movies.find({}).sort({_id: -1})
}

module.exports = {
  add,
  findall
}