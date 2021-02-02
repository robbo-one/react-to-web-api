import React, { useState } from 'react'
import Widget from './Widget'
import Form from './AddWidget'

function App () {

  const [button, setButton] = useState(false)

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <Widget />
      <button onClick={() => setButton(true)} >Add Widget</button>
        { button ? <Form /> : null }
    </div>
  )
}

export default App
