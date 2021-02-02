import request from 'superagent'


const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)//rec'd response from route, then send to widgetsjsx
}

export function addNewWidget (widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then(response => response.body)
    //rec'd response from route, then send to addWidget.jsx component
}







export default { getWidgets, addNewWidget}

