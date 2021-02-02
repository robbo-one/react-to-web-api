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

export function deleteWidget (id) {
  return request
    .delete(widgetUrl)
    .send( { id: id } )
    .then(response => response.body)
}

export function editWidget (formData) {
  return request 
    .patch(widgetUrl)
    .send(formData)
    .then(response => response.body)
}
