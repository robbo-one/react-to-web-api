import React from 'react'
import { useState, useEffect } from 'react'
import { getWidgets } from '../api.js'
import AddWidget from './AddWidget.jsx'
import Widget from './Widget'



function App () {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    // console.log('using the effect')
    getWidgets()
      .then(result => {
        setWidgets(result)
      })
  }, [] )
  
  return (
    <div>
      <h1>Widgets for the win!</h1>
      {widgets.map(widget => {        
        return (
          <ul>
            <li key={widget.id}>
              <Widget widget={widget} />
            </li>
          </ul>
        )
      })}
      <AddWidget />
      
    </div>
  )
}

export default App
