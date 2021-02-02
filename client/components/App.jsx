import React, {useEffect, useState} from 'react'
import request from 'superagent'
import {getWidgets, updateAWidget} from '../api'
import Newwidget from './Addwidget'
import Updatewidget from './Updatewidget'


function App () {
  
  const [widgets, setWidgets] = useState([]) 

  const [thisWidget, updateThisWidget] = useState(null)

  useEffect(() => {
    getWidget()
    getWidgets()
    .then(
      console.log(getWidgets())
    )
  }, [])

  const getWidget = () => {
    console.log('getting widgets')
    return request.get('/api/v1/widgets')  
    .then(res => {
      console.log('got widgets')
      setWidgets(res.body)
    })  
  }  

  const clickWidget = (aWidget) => {
    return( 
      updateThisWidget(aWidget)
    )
  }

  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
        <ul>
          {widgets.map(aWidget => (
            <li onClick={() => clickWidget(aWidget)} key={aWidget.id}>{aWidget.name}</li>
          ))}
        </ul>
      </div>
      <Newwidget/>
        
      {thisWidget && <Updatewidget currentWidget={thisWidget}/>}

    </>
        )
}

export default App
