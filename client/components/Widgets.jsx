import React, { useState, useEffect} from 'react'
import getWidgets from '../api'

//2 
const Widgets = () => {
    const [widgets, setWidgets] = useState([])
  
    useEffect(() => {
      console.log('Effects working')
      getWidgets().then(widgets => {
        setWidgets(widgets) //set to be widget object returned
      })
     // return getWidgets()
     // .then(console.log(getWidgets))
    }, [])
    return(widgets.map => {
    <p>Mounted</p>)
}

  
 

export default Widgets
