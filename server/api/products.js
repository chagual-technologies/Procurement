const router = require('express').Router()
const {Product} = require('..db/models')
module.exports = router

// ALL PRODUCTS
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

// SINGLE PRODUCT
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Product.findbyPk(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

// NEW PRODUCT
router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(200).json(newProduct)
  } catch (error) {
    next(error)
  }
})

// DELETE PRODUCT
router.delete('/:id', async (req, res, next) => {
  try {
    await Product.destroy({
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
    const [_, [updated]] = await Product.update(req.body, {
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
