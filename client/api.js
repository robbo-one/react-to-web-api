import request from 'superagent'


const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)//rec'd response from route, then send to widgetsjsx
}

export function addNewWidget () {
  return request
    .post(updatedWidgetList)
    .then(response => response.body)
    //rec'd response from route, then send to addWidget.jsx component
}







export default { getWidgets, addNewWidget}

