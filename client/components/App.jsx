import React, {useState, useEffect} from 'react'
import {getWidgets} from '../api'
import Widget from './Widget'
// import Link from 'react-router-dom'
import AddWidget from "./AddWidget"
// import {Route} from 'react-router-dom'

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
      {/* <Route path='/api/v1/widgets' exact component AddWidget/>       */}
      <AddWidget />
      {widgets.map(widget => {
        return <Widget info = {widget} />
      } )}
    </div>
  )
}




export default App
