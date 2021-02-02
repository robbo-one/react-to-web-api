const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  nuWidget
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function nuWidget (widget, db = connection) {
  return db('widgets').insert(widget)
  .then(ids => ids[0])
}