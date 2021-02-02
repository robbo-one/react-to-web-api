import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget (widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then(response => response.body)
}

export function deleteWidget (widget) {
  return request
    .del(widgetUrl)
    .send(widget)
    .then(response => response.body)
}
