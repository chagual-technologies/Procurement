const router = require('express').Router()
const {Products, Type, Bussines} = require('../db/models/index')
module.exports = router

// ALL PRODUCTS
router.get('/', async (req, res, next) => {
  try {
    const products = await Products.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

// SINGLE PRODUCT
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Products.findbyPk(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

// NEW PRODUCT
router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Products.create(req.body)
    res.status(200).json(newProduct)
  } catch (error) {
    next(error)
  }
})

// DELETE PRODUCT
router.delete('/:id', async (req, res, next) => {
  try {
    await Products.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(res.params.id).end()
  } catch (error) {
    next(error)
  }
})

//UPDATE PRODUCT

router.put('/:id', async (req, res, next) => {
  try {
    console.log('REQ.Body', req.body)
    const [_, [updated]] = await Products.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
    res.json(updated)
  } catch (error) {
    next(error)
  }
})
