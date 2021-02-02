import React, { useState } from "react"
import {addWidget, getWidgets} from "../api"



export function AddWidget(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault()
    addWidget(formData)
    props.next()
  }

  const handleChange = (event) => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const [formData, setFormData] = useState({
    name:"",
    price:"",
    mfg: "",
    inStock: ""
  })
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange}></input>
        </label><br></br>
        <label>
          Price:
          <input type="text" name="price" onChange={handleChange}></input>
        </label><br></br>
        <label>
          Mfg:
          <input type="text" name="mfg" onChange={handleChange}></input>
        </label><br></br>
        <label>
          In stock:
          <input type="text" name="inStock" onChange={handleChange}></input>
        </label><br></br>
        <button >Summit </button>

      </form>
    </div>
    
  )
}
