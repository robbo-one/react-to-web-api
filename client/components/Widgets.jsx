import React, { useState, useEffect} from 'react'
import { getWidgets } from '../api'
import AddWidget from './AddWidget'

//2 
const Widgets = () => {
    const [widgets, setWidgets] = useState([])

    const refresh = () => {
      getWidgets().then(widgets => {
        setWidgets(widgets) //set to be widget object returned
      })
    }
  
    useEffect(() => {
      console.log('Effects working')
      refresh()
    }, [])
    
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

          <AddWidget refresh={refresh}/>

      </>
  )}
            

export default Widgets


{/* <p>Mounted</p> */}
   {/* // return getWidgets()
     // .then(console.log(getWidgets)) */}