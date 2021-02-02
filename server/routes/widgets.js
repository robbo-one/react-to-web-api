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
  const widget = req.body
  db.addWidget(widget)
  .then(newWidget => {
    res.json(newWidget)
  })
})

router.delete('/:id', (req,res) => {
  const id = req.params.id
  
  db.deleteWidget(id)
    .then(() => {
      res.json({})
    })
})

module.exports = router
