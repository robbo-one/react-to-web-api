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
  console.log(widget)
  db.addWidget(widget)
  
    .then(id => {
      console.log(widget)
      db.getAWidget(id)
      .then(widget => {
        res.json(widget) 

      }
      )
    })
})

router.patch('/', (req, res) => {
  const widget = req.body
  console.log(widget)
  db.updateWidget(widget)
  .then(() => {
    db.getAWidget(id)
    .then(widget => {
      res.json(widget)
    })
  })
})

module.exports = router
