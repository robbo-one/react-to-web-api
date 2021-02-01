import React from 'react'
import { useState } from 'react'
import { addWidget } from '../api'

function AddWidget() {

  const [formData, setFormData] = useState({
    name: '',
    price: null,
    mfg: '',
    inStock: null
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
    addWidget(formData)
  }

  return(
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Name:
        <input type='text' name='name' onChange={handleChange}/>
      </label>
      <label>
        Price:
        <input type='text' name='price' onChange={handleChange}/>
      </label>
      <label>
        MFG:
        <input type='text' name='mfg' onChange={handleChange}/>
      </label>
      <label>
        number in stock:
        <input type='text' name='inStock' onChange={handleChange}/>
      </label>
      <input type="submit" value="add this widget" />
    </form>
  )
}

export default AddWidget