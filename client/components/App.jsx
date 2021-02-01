import React, { useEffect, useState } from 'react'
import { getWidgets } from '../api.js'

function App () {

  const [widgets] = useState([])

  useEffect(() => {
    getWidgets()
    .then(console.log(getWidgets()))
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
