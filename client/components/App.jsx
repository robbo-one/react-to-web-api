import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api.js'
import Widget from './Widget'
import Form from './AddWidget'

function App () {


  return (
    <div>
      <h1>Widgets for the win!</h1>
      <Widget />
      <Form />
    </div>
  )

}

export default App
