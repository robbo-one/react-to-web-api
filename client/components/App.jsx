import React, { useEffect, useState } from 'react'

import { getWidgets } from '../api'


function App () {

const [widget, setWidgets] = useState([])

useEffect(() => {
  getWidgets()
    .then(widgets => {
      setWidgets(widgets)
    })
  }, []
)
  
 
  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
