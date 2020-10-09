const { Movies } = require('../utils/db')

const find = async ({_start, _limit}) => {
  return await Movies.find({}).sort({_id: -1}).limit(~~_limit).skip(~~_start)
}

module.exports = {
  find
}