const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidget(widget, db =connection) {
  return db('widgets')
  .insert(widget).then(ids => ids[0])
}

// function getWidget(id, db = connection) {
//   return db('widget')
//     .where('Widgets.id', id)
//     .first()
// }

module.exports = {
  getWidgets,
  addWidget,
  // getWidget
}
