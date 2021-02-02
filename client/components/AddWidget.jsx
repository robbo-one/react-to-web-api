import React, {useState} from "react";
import {addWidget} from "../api"


function AddWidget(props) {

const [newWidget, setNewWidget] = useState({
  name: "",
  price: "",
  mfg: "",
  inStock: ""
})

const handleSubmit = (event) => {
  addWidget(newWidget)
}

const handleChange = (event) => {

  setNewWidget(currentFormData => {
    return {
      ...currentFormData,
      [event.target.name]: event.target.value
    }
  })
}

  return (
    <div>
        <h1>Add Widget</h1>
      <form onSubmit={handleSubmit} >
        Name: <input type="text" name="name" onChange={ handleChange} />
        Price: <input type="number" name="price" onChange={ handleChange} />
        MFG: <input type="text" name="mfg" onChange={ handleChange} />
        inStock: <input type="number" name="inStock" onChange={ handleChange} />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default AddWidget;
