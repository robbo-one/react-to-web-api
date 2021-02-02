import React, { useState, useEffect } from "react"
import {getWidgets} from "../api"
import {Widget} from "./Widget"
import {AddWidget} from "./AddWidget"


function App() {
  const [widget, setWiget] = useState([])

  const fetchData = () => {
    getWidgets()
      .then(widgets => {
        setWiget(widgets)
    })}

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widget.map(w => {
          return <li>{Widget(w)}</li>
        })}
      </ul>
      <AddWidget next={fetchData} />
    </div>
  )
}

export default App;
