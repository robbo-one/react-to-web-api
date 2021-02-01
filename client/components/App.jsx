import React, {useState, useEffect} from 'react'
import {getWidgets} from '../api'
import Widget from './Widget'

function App () {
  const [widgets, setWidgets]= useState([])
  useEffect(() => {
    console.log('using the effect')
    getWidgets()
    .then(res => {
      setWidgets(res)
    })
  },[])
  return (
    <div>
      <h1>Widgets for the win!</h1>
      {widgets.map(widget => {
        return <Widget info = {widget} />
      } )}
    </div>
  )
}



export default App
