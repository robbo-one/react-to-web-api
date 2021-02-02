import React, { useState, useEffect} from 'react'
import { getWidgets } from '../api'

//2 
const Widgets = () => {
    const [widgets, setWidgets] = useState([])
  
    useEffect(() => {
      console.log('Effects working')
      getWidgets().then(widgets => {
        setWidgets(widgets) //set to be widget object returned
      })}, [])
      return (
        <>
            {widgets.map(aWidget => (
               <ul key={aWidget.id}>
                <li>{aWidget.name}</li>
                <li>{aWidget.price}</li>
                <li>{aWidget.mfg}</li>
                <li>{aWidget.inStock}</li>
              </ul>
            ))}
        </>
  )}
            

export default Widgets


{/* <p>Mounted</p> */}
   {/* // return getWidgets()
     // .then(console.log(getWidgets)) */}