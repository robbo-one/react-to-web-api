import React from 'react'
import { useState } from 'react'
import { editWidget } from '../api'

function AddWidget(props) {

  const widget = props.widget

  const [formData, setFormData] = useState({
    id: widget.id,
    name: widget.name,
    price: widget.price,
    mfg: widget.mfg,
    inStock: widget.inStock
  })

  const handleChange = (event) => {
    setFormData(currentFormData => {
      return {
      ...currentFormData,
      [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editWidget(formData)
      .then(res => {
        props.setWidgets(res)
      })
  }

  return(
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Name:
        <input type='text' name='name' onChange={handleChange} value={widget.name} />
      </label>
      <label>
        Price:
        <input type='text' name='price' onChange={handleChange} value={widget.price} />
      </label>
      <label>
        MFG:
        <input type='text' name='mfg' onChange={handleChange} value={widget.mfg} />
      </label>
      <label>
        number in stock:
        <input type='text' name='inStock' onChange={handleChange} value={widget.inStock} />
      </label>
      <input type="submit" value="update this widget" />
    </form>
  )
}

export default AddWidget