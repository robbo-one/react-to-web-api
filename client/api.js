import { response } from 'express'
import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget (widgetData) {
  return request
    .post(widgetUrl)
    .send(widgetData)
    .then(response => response.body)
}

export function deleteWidget (widget) {
  return request
    .del(widgetUrl)
    .send(widget)
    .then(response => response.body)
}