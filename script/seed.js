'use strict'

const db = require('../server/db')
const {User, Products, Type} = require('../server/db/models')

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

const seedType = [
  {
    name: 'Insumo',
    bussinesline: 'Entibacion',
    products: [
      {
        code: 'A01',
        name: 'Caja verde2',
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
        comment: 'todo OK'
      }
    ]
  },
  {
    name: 'Activo',
    bussinesline: 'Entibacion',
    products: [
      {
        code: 'V01',
        name: 'Caja Lila',
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
        code: 'V02',
        name: 'Caja roja3',
        brand: '3M',
        inventory: 20,
        unit: 'c/u',
        price1: 200,
        price2: 300,
        stock: 25,
        pending: 5,
        minstock: 2,
        comment: 'todo OK'
      }
    ]
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
    seedType.map(type => {
      return Type.create(type, {
        include: [Products]
      })
    })
  )
  console.log(`seeded ${seedUsers.length} users`)
  console.log(`seeded ${seedType.length} types`)

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
