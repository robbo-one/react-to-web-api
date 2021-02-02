const { response } = require('express')
const express = require('express')
const { render } = require('react-dom')
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
    // console.log(req.body)
    db.addWidget(req.body)
      .then(id=> {
        db.getWidgetByID(id)
          .then(widget=> {
            res.json(widget)
        })
      })
})

router.delete('/', (req, res)=>{
  db.deleteWidget(req.body.id) 
  .then(() =>{
    db.getWidgets ()
    .then (widgets =>{
      res.json(widgets)
    })
  } )
})

module.exports = router
