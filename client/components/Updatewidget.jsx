import React, {useState, useEffect} from 'react'
import { updateAWidget } from '../api'


const Updatewidget = (props) => {
  
 

  const[message, setMessage] = useState('')

  const[formData, setFormData] = useState({
    name:props.currentWidget.name,
    price:'',
    mfg:'',
    inStock:''
  })

  useEffect (() => {
    setFormData(props.currentWidget)

  },[props.currentWidget])

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
    updateAWidget(formData)
  }

  return(
    <>
      <h1>Update a widget</h1>
      <form onSubmit={handleSubmit}>
        {message && <span className="message">{message}</span>}
          <label>
            Name:
            <input type='text' value={formData.name} name='name' onChange={handleChange}/>
          </label>

        <br>
        </br>

          <label>
            Price:
            <input type='decimal' value={formData.price} name='price' onChange={handleChange}/>
          </label>

        <br>
        </br>

          <label>
            Manufacturer:
            <input type='text' value={formData.mfg} name='mfg' onChange={handleChange}/>   
          </label>
          
        <br></br>

          <label>
            Quantity:
            <input type='number' value={formData.inStock} name='inStock' onChange={handleChange}/>
          </label>
        
          <button type='submit'>Done</button>
      </form>

    </>
  )
}

export default Updatewidget