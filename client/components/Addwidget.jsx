import React, {useState} from 'react'
import {addWidget} from '../api'


const Newwidget = () => {

  const[message, setMessage] = useState('')

  const[formData, setFormData] = useState({
    name:'',
    price:'',
    mfg:'',
    inStock:''
  })

  const handleChange = (e) => {
    setFormData(currentFormData => {
      return{
        ...currentFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    addWidget(formData)
  }

  return(
    <>
      <h1>Add a new widget</h1>
      <form onSubmit={handleSubmit}>
        {message && <span className="message">{message}</span>}
          <label>
            Name:
            <input type='text' name='name' onChange={handleChange}/>
          </label>

        <br>
        </br>

          <label>
            Price:
            <input type='number' name='price' onChange={handleChange}/>
          </label>

        <br>
        </br>

          <label>
            Manufacturer:
            <input type='text' name='mfg' onChange={handleChange}/>   
          </label>
          
        <br></br>

          <label>
            Quantity:
            <input type='number' name='inStock' onChange={handleChange}/>
          </label>
        
          <button type='submit'>Done</button>
      </form>

    </>
  )
}


export default Newwidget