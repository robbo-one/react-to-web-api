import React, {useState} from 'react'
import { addWidget } from '../api'

function AddWidget (props)  {

const [formData, setFormData] = useState({
  name: '',
  mfg: '',
  inStock: '',
  price: ''
})

const handleChange = (event) => {
  setFormData(currentFormData => {
    // console.log(...currentFormData)
    return {
      ...currentFormData,
      
      [event.target.name]: event.target.value
    }
  })
}

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("we got into handlesubmit")
    // console.log(formData)
    addWidget(formData)
    props.next()
    setFormData ({
      name: '',
      mfg: '',
      inStock: '',
      price: ''
    })
  }

 return (
  <form onSubmit={handleSubmit}>
    <label>
      Name: <br></br>
      <input type="text" name="name" onChange={handleChange} value ={formData.name} required/>
    
    </label>
  <br></br>
    <label>
      Manufacturer: <br></br>
      <input type="text" name="mfg" onChange={handleChange} value ={formData.mfg}required/>
    </label>
<br></br>
    <label>
      Stock Level: <br></br>
      <input type="text" name="inStock" onChange={handleChange} value ={formData.inStock}required/>
    </label>
<br></br>
    <label>
      Price: <br></br>
      <input type="text" name="price" onChange={handleChange}value ={formData.price} required/>
    </label>

    <input type="submit" value="Submit"/>

  </form>
)}



export default AddWidget