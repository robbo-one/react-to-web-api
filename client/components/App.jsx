import React, { useState, useEffect } from "react"
import {getWidgets} from "../api"
import {Widget} from "./Widget"

function App() {
  const [widget, setWiget] = useState([])

  useEffect(() => {
      getWidgets()
      .then(widgets => {
        setWiget(widgets)
      })},
    [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widget.map(w => {
          return <li>{Widget(w)}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
