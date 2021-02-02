import React, { useEffect, useState } from 'react'
import {getWidgets} from '../api'
import Widget from './Widget'
import AddWidget from './AddWidget'

function App () {
  const [widgets, setWidgets] = useState([])

  const fetchData = () => {
    getWidgets()
      .then(widg => {
        setWidgets(widg)
    })}

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map(aWidget => (
          <li key={aWidget.id}><Widget aWidget={aWidget} /></li>
        ))}
      </ul>
      <AddWidget next={fetchData} />
    </div>
  )
}

export default App
