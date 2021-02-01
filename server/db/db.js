const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getWidgets (db = connection) {
  return db('widgets').select()
}

module.exports = {
  getWidgets
}
