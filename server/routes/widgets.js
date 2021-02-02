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

router.post('/', (req,res) => {
  const widget = req.body
  db.addWidget(widget)
    .then(id => {
      res.json({id: id})
    })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  db.removeWidget(id)
  .then(() => {
    res.json(widgets)
})
})

module.exports = router
