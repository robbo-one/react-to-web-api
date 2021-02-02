//@ts-check

import React, { useState } from "react";

const AddWidget = () => {
  const [formData, setFormData] = useState({
    name: "",
    inStock: "",
    price: "",
    mfg: ""
  })

  const handleSubmit = (event) => {
    console.log(formData)
    setFormData({
      name: "",
      inStock: "",
      price: "",
      mfg: ""
    })
    event.preventDefault()
  }

  const handleChange = (event) => {

    setFormData(currentFormData => {
      // console.log(currentFormData)
      return {
        ...currentFormData,
        [event.target.name] : event.target.value
    }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} />
      </div>

      <div>
        In stock:
        <input type="text" name="inStock" onChange={handleChange} value={formData.inStock} />
      </div>

      <div>
        Price:
        <input type="text" name="price" onChange={handleChange} value={formData.price} />
      </div>

      <div>
        MFG:
        <input type="text" name="mfg" onChange={handleChange} value={formData.mfg} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default AddWidget
