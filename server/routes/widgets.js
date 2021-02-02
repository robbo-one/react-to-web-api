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

//add new widget - takes req body from form
router.post('/', (req, res) => {
  db.addNewWidget(req.body)
  .then(id => {
    res.json(id)  //pass updated list to client
    })
})




module.exports = router
