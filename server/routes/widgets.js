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
  const newWidget = req.body
  db.addWidget(newWidget)
    .then(result => {
      db.getWidgets()
        .then(widgets => {
          res.json(widgets)
        })
    })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  db.deleteWidget(id)
    .then(result => {
      db.getWidgets()
        .then(widgets => {
          res.json(widgets)
        })
    })  
})

router.patch('/', (req, res) => {
  const newData = req.body
  db.updateWidget(newData)
    .then(result => {
      db.getWidgets()
        .then(widgets => {
          res.json(widgets)
        })
    })
})

module.exports = router
