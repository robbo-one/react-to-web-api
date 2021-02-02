import React, {useEffect, useState} from 'react'
import request from 'superagent'
import {getWidgets} from '../api'
import Newwidget from './Addwidget'


function App () {
  
  const [widgets, setWidgets] = useState([]) 

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

  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
        <ul>
          {widgets.map(aWidget => (
            <li key={aWidget.id}>{aWidget.name}</li>
          ))}
        </ul>
      </div>
      <Newwidget/>

    </>
        )
}

export default App
