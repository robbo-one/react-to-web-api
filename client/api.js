import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget (data) {
  return request
    .post(widgetUrl)
    .send(data)
    .then(response => response.body)
}