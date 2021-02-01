import React, { useEffect, useState } from 'react'
import { getWidgets } from '../api.js'

function App () {

  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    getWidgets()
    .then(setWidgets)
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
