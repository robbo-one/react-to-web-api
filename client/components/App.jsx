import React, { useEffect, useState } from 'react'
import {getWidgets} from '../api'

function App () {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    // console.log('using the effect',)
    getWidgets()
    .then(() => {
      console.log(getWidgets())
    })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
