import request from 'superagent'
const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget (formData) {
  return request
  .post(widgetUrl)
  .send(formData)
  .then(response => response.body)
}

export function updateAWidget (formData) {
  return request
  .patch(widgetUrl)
  .send(formData)
  .then(response => response.body)
}