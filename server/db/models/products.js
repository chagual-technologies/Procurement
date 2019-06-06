const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('products', {
  code: {
    type: Sequelize.STRING,
    required: true,
    unique: true
  },

  name: {
    type: Sequelize.STRING,
    required: true,
    unique: true
  },

  brand: {
    type: Sequelize.STRING,
    required: false,
    unique: false
  },

  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    required: true
  },

  unit: {
    type: Sequelize.STRING,
    required: true
  },

  price1: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  price2: {
    type: Sequelize.FLOAT,
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

module.export = Products
