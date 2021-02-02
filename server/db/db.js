const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidget,
  deleteWidget
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidget (name, price, mfg, inStock, db = connection) {
  return db('widgets').insert({
name: name, price: price, mfg: mfg, inStock: inStock
  })
}

function deleteWidget (id, db = connection) {
  return db('widgets')
  .del()
  .where("id", id)
}