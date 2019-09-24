const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  code: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  brand: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },

  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  unit: {
    type: Sequelize.STRING
  },

  price1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  price2: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  pending: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  minstock: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  comment: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Products
