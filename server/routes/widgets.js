const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => {
      res.json(widgets)//send back to who called ie api
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
