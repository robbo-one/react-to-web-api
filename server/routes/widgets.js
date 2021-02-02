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

  console.log(req.body)

  const newWidget = {
    name: req.body.name,
    price: req.body.price,
    mfg: req.body.mfg,
    inStock: req.body.inStock
  }

  db.addWidget(newWidget)
  .then(() => {
    db.getWidgets()
    .then((widgets => {
      res.json(widgets)
    }))
  })

})

router.delete('/', (req, res) => {


  db.addWidget(newWidget)
  .then(() => {
    db.getWidgets()
    .then((widgets => {
      res.json(widgets)
    }))
  })

})

module.exports = router
