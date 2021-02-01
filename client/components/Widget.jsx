import React from 'react'
import { useState, useEffect } from 'react'
import { getWidgets } from '../api.js'

function Widget (props) {
  // console.log(props.widget)
  const widget = props.widget
  return (
    <>
    
      <h2>{widget.name}</h2>
      <ul>
      <li>price: ${widget.price}</li>
      <li>mfg: {widget.mfg}</li>
      <li>in stock: {widget.inStock}</li>
      </ul>
    
    </>
  )
}

export default Widget