import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget (name) {
  return request
    .post(widgetUrl)
    .send(name)
    .then(response => response.body)
}

export function deleteWidget (widget) {
  return request
    .del(widgetUrl)
    .send(widget)
    .then(response => response.body)
}

export function updateWidget (updatedWidget) {
  console.log(updatedWidget)
  return request
    .patch(widgetUrl)
    .send(updatedWidget)
    .then(response => response.body)
}