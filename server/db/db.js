const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addWidget,
  deleteWidget,
  updateWidget
}

function getWidgets (db = connection) {
  return db('widgets').select()
}

function addWidget (newWidget, db = connection) {
  return db('widgets')
    .insert(newWidget)
    .then(ids => ids[0])
}

function deleteWidget (id, db = connection) {
  console.log (id)
  return db('widgets')
    .where('id', id)
    .delete()
}

function updateWidget (newData, db = connection) {
  console.log(newData)
  return db('widgets')
    .where('id', newData.id)
    .update(newData)
}
