const Sequelize = require('sequelize')
const db = require('../db')

const Type = db.define('type', {
  name: {
    type: Sequelize.STRING,
    required: true,
    unique: true
  },

  bussinesline: {
    type: Sequelize.STRING,
    required: true,
    unique: false
  }
})

module.export = Type
