const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWidgets,
  addNewWidget
}

function getWidgets (db = connection) {
  return db('widgets').select()
}
console.log('using the effect')

//Append new widget to database
function addNewWidget (newWidget, db = connection) {
  console.log(newWidget)
  return db('widgets').insert(newWidget)//append newWidget to db
  .then('widgets')
//I want to reutrn this to the route so the route can pass to client

}
