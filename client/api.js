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

export function deleteWidget (id) {
  return request
    .delete(widgetUrl)
    .send ({ id: id})
    .then(response => response.body)
}


// export function
// send ({ id: id})
// const id = req.body.id