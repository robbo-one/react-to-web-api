import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget (newWidget) {
  return request
    .post(widgetUrl)
    .send(newWidget)
    .then(response => response.body)
}

export function removeWidget (id) {
  return request
    .del(widgetUrl)
    .send({id: id})
    .then(response => response.body)
}