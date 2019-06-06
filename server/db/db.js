const Sequelize = require('sequelize')
// const pkg = require('../../package.json')
// const mysql = require('mysql')

// const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize('compras', 'root', 'nicolas22', {
  host: '127.0.0.1',
  dialect: 'mysql'
})
module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
// if (process.env.NODE_ENV === 'test') {
//   after('close database connection', () => db.close())
// }
