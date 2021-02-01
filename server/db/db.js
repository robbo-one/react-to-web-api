const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidget,
  getWidgetByID
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidget(widget, db = connection) {
  return db('widgets')
  .insert(widget)
  .then(ids => ids[0])
}

function getWidgetByID(id, db = connection) {
  return db('widgets')
  .where("id",id)
  .select('*')
  .first()
}
