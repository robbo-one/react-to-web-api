import React, { useState, useEffect } from "react"
import {deleteWidget, getWidgets} from "../api"
import {Widget} from "./Widget"
import {AddWidget} from "./AddWidget"


function App() {
  const [widget, setWiget] = useState([])
  const [state, setState] = useState(null)

  const fetchData = () => {
    getWidgets()
      .then(widgets => {
        setWiget(widgets)
    })}


    const updateState = () => {
      setState(<AddWidget next={fetchData} />)
    }

    const handleDelete = (widget, evt) => {
      deleteWidget(widget)
      fetchData()
    }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widget.map(w => {
          return <li key={w.id}>{Widget(w)}<button onClick={() => handleDelete(w)}>Delete</button></li>
        })}
      </ul>
      <button onClick={updateState}>Show Add Form</button>
      {state}
    </div>
  )
}

export default App;
