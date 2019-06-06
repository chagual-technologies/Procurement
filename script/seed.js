'use strict'

const db = require('../server/db')
const {User, Products} = require('../server/db/models')

const seedUsers = [
  {
    email: 'cody@email.com',
    password: '123'
  },
  {
    email: 'murphy@email.com',
    password: '123'
  }
]

const seedProducts = [
  {
    code: 'A01',
    name: 'Caja verde',
    brand: '3M',
    inventory: 20,
    unit: 'c/u',
    price1: 200,
    price2: 300,
    stock: 25,
    pending: 5,
    minstock: 2,
    comment: 'todo OK'
  },
  {
    code: 'A02',
    name: 'Caja roja',
    brand: '3M',
    inventory: 20,
    unit: 'c/u',
    price1: 200,
    price2: 300,
    stock: 25,
    pending: 5,
    minstock: 2,
    comment: 'todo OKey'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    seedUsers.map(user => {
      return User.create(user)
    })
  )

  await Promise.all(
    seedProducts.map(product => {
      return Products.create(product)
    })
  )

  console.log(`seeded ${seedUsers.length} users`)
  console.log(`seeded ${seedProducts.length} products`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
