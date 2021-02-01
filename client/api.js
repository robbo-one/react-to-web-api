import { response } from 'express'
import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget () {
  return request
    .get(widgetURL)
    .then(response => response.body)
}
