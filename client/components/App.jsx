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
        { button ? <Form /> : console.log('poop')}
    </div>
  )
}

export default App
