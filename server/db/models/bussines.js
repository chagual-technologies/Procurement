const Sequelize = require('sequelize')
const db = require('../db')

const Bussines = db.define('bussines', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Bussines
