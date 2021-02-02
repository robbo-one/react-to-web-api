import React, { useState } from "react"
import { updateWidget } from "../api"

export function UpdateWidget(props) {
  // console.log(props.widget)

  const [formData, setFormData] = useState({
    id: props.widget.id,
    name: props.widget.name,
    price: props.widget.price,
    mfg: props.widget.mfg,
    inStock: props.widget.inStock,
  })

  const handleSubmit = (evt) => {
    // evt.preventDefault()
    updateWidget(formData)
  }

  const handleChange = (evt) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [evt.target.name]: evt.target.value,
      }
    })
  }

  return (
    <>
      <h3>Update Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <label>
          Mfg:
          <input
            type="text"
            name="mfg"
            value={formData.mfg}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <label>
          In stock:
          <input
            type="text"
            name="inStock"
            value={formData.inStock}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <button>Submit </button>
      </form>
      <br></br>
    </>
  )
}
