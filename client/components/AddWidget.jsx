import React from 'react'
import { addWidget } from '../api'

const AddWidget = () =>
{ return (
  <form >
    <label>
      Name: <br></br>
      <input type="text" name="name" />
    
    </label>
  <br></br>
    <label>
      Manufacturer: <br></br>
      <input type="text" name="mfg" />
    </label>
<br></br>
    <label>
      Stock Level: <br></br>
      <input type="text" name="inStock" />
    </label>
<br></br>
    <label>
      Price: <br></br>
      <input type="text" name="price" />
    </label>

    <input type="submit" value="Submit" />

  </form>
)}



export default AddWidget