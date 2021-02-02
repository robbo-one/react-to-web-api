import React, { useEffect, useState } from 'react'
import {getWidgets} from '../api'
import Widget from './Widget'
import AddWidget from './AddWidget'
import deleteWidget from '../../server/db'

function App () {
  const [widgets, setWidgets] = useState([])

  const fetchData = () => {
    getWidgets()
      .then(widg => {
        setWidgets(widg)
    })}

  const handleDelete = (widget) => {
    deleteWidget(widget)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map(aWidget => {
          return <li key={aWidget.id}>{Widget(aWidget)}<button onClick={() => handleDelete(aWidget)}>Delete</button><Widget aWidget={aWidget} /></li>
        })}
      </ul>
      <AddWidget next={fetchData} />
    </div>
  )
}

export default App
