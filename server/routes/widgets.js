const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => {
      res.json(widgets)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const name = req.body.name
  const price = req.body.price
  const mfg = req.body.mfg
  const inStock = req.body.inStock

  console.log(req.body)
  db.addWidget(name, price, mfg, inStock)
  .then(() => {
    db.getWidgets()
    .then (widgets => {
      res.json(widgets)
    })
  })
})

module.exports = router
