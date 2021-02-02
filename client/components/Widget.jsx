import React from 'react'
import { useState, useEffect } from 'react'
import { deleteWidget } from '../api.js'
import EditWidget from './EditWidget'

function Widget (props) {

  const [editing, setEdititing] = useState(false)

  const handleClickDelete = (id) => {
    console.log(id)
    deleteWidget(id)
      .then(res => {
        console.log(res)
        props.setWidgets(res)
      })
  }

  const widget = props.widget
  return (
    <>
    
      <h2>{widget.name}</h2>
      <ul>
      <li>price: ${widget.price}</li>
      <li>mfg: {widget.mfg}</li>
      <li>in stock: {widget.inStock}</li>
      </ul>

      <button onClick={() => handleClickDelete(widget.id)}>Delete</button>
      <button onClick={()=> setEdititing(!editing)}>Edit me!</button>
      {editing && <EditWidget widget={widget} setWidgets={props.setWidgets} />}
    </>
  )
}

export default Widget