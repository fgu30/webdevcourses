const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/maoyan-admin', { useUnifiedTopology: true, useNewUrlParser: true })

const Users = mongoose.model('users', {
  username: String,
  password: String
})

const Movies = mongoose.model('movies', {
  nm: String,
  poster: String,
  rt: String,
  star: String,
  wish: String
})

module.exports = {
  Users,
  Movies
}