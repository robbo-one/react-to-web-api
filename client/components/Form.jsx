import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    inStock: "",
    price: "",
    mfg: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  const handleChange = (event) => {
  
    setFormData(currentFormData => {
      console.log(currentFormData)
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
        <input type="text" name="name" onChange={(event) => handleChange(event)} />
      </div>

      <div>
        In stock:
        <input type="text" name="inStock" onChange={handleChange} />
      </div>

      <div>
        Price:
        <input type="text" name="price" onChange={handleChange} />
      </div>

      <div>
        MFG:
        <input type="text" name="mfg" onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form