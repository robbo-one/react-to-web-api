const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidget,
  getAWidget,
  updateWidget
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidget (widget, db = connection) {
  return db('widgets').insert(widget)
  .then(ids => ids[0])
}

function getAWidget (id, db = connection) {
  return db('widgets').where('id', id).first()
}

function updateWidget ( widget, db = connection) {
  return db('widgets').update(widget).where('id', widget.id)
  .then(ids => ids[0])
}
