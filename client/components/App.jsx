import React, { useEffect, useState } from 'react'
import {getWidgets} from '../api'

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
    </div>
  )
}

export default App
