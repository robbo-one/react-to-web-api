import React, { useEffect, useState } from 'react'
import {getWidgets} from '../api'
import Widget from './Widget'

function App () {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    getWidgets()
    .then(widg => {
      console.log(widg)
      setWidgets(widg)
    })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map(aWidget => (
          <li key={aWidget.id}><Widget aWidget={aWidget} /></li>
        ))}
      </ul>
    </div>
  )
}

export default App
