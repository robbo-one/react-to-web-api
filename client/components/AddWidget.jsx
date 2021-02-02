import React, { useState } from 'react'
import {addWidget} from '../api'

function AddWidget (props) {

  const [formData, setFormData] = useState({
    name: '',
    mfg: '',
    price: '',
    inStock: ''
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
    props.next()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Budgie in a flower pot:
          <input type='text' name='name' onChange={handleChange} placeholder='Name' />
        </label>

        <label>
          How much moneys?:
          <input type='text' name='price' onChange={handleChange} placeholder='Price' />
        </label>

        <label>
          Where does this come from???:
          <input type='text' name='mfg' onChange={handleChange} placeholder='Manudacturer' />
        </label>

        <label>
          What are the inventory levels?:
          <input type='text' name='inStock' onChange={handleChange} placeholder='Vegetable Stock' />
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddWidget