import React, { useState } from 'react'
import { addWidget, getWidgets } from '../api'

const Form = (props) => {
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    mfg: '',
    inStock: '',
  })

  const handleChange = (event) => {

    // Note that this setFormData takes a function
    // Do this whenever you set state based on existing state
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value
      }
    })

    // if(event.target.name == 'name') {
    //   setFormData({
    //     name: event.target.value
    //   })
    // }

    // if(event.target.name == 'email') {
    //   setFormData({
    //     email: event.target.value
    //   })
    // }
  }

  const handleSubmit = (event) => {
    // event.preventDefault()

    setMessage('')

    if(formData.name.length == 0) {
      setMessage('You need to fill out the name')
      console.log('Data is not ready')
    } else {
      addWidget(formData)
      console.log(formData)
      .then(getWidgets)
    }

  }
  
  return (
    <>
    <h1>Add a Widget!</h1>
    <br></br>
    <form onSubmit={handleSubmit}>
      {message && <span className="message">{message}</span>}

      <label>
        Name:
        <br></br>
        <input type="text" name="name" onChange={(event) => handleChange(event)} required={true}/>
      </label>
      <br></br>

      <label>
        Price:
        <br></br>
        <input type="text" name="price" onChange={handleChange} />
      </label>
      <br></br>

      <label>
        Manufacturer:
        <br></br>
        <input type="text" name="mfg" onChange={handleChange} />
      </label>
      <br></br>

      <label>
        How Many In Stock:
        <br></br>
        <input type="text" name="inStock" onChange={handleChange} />
      </label>
      <br></br>
      <br></br>
      <button>Send</button>
    </form>
    </>
  )
}

export default Form