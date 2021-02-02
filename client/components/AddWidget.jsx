import React, { useState, useEffect} from 'react'
import { addNewWidget } from '../api'







const AddWidget = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        mfg: '',
        inStock: ''
    })
    const handleChange = (event) => {
        setFormData(formData => {
            return {
                ...formData,
            [event.target.name]: event.target.value
            }
            })
        }
        const handleSubmit = (event) => {
            event.preventDefault()
                addNewWidget(formData)
                .then(props.refresh)
            }

        return (
        <>
        <h1>Enter Details of Widget to add</h1>
        <form onSubmit={handleSubmit}> 
            <label>Name:
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <label>Price:
                <input type="int" name="price" onChange={handleChange} />
            </label>
            <label>Mfg:
                <input type="text" name="mfg" onChange={handleChange} />
            </label>
            <label>In Stock:
                <input type="boolean" name="inStock" onChange={handleChange} />
            </label>
            <button>Add Widget</button>
        </form>
        </>

    )
    }
export default AddWidget


