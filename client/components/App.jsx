import React, { useState, useEffect } from "react";
import { deleteWidget, getWidgets, updateWidget } from "../api";
import { Widget } from "./Widget";
import { AddWidget } from "./AddWidget";
import { UpdateWidget } from "./UpdateWidget"

function App() {
  const [widget, setWiget] = useState([])
  const [addState, setAddState] = useState(null)
  const [updateState, setUpdateState] = useState(null)


  const fetchData = () => {
    getWidgets().then((widgets) => {
      setWiget(widgets)
    })
  }

  const updateAddState = () => {
    setAddState(<AddWidget next={fetchData} />)
  }

  const updateUpdateState = (w) => {
    setUpdateState(<UpdateWidget widget={w}/>)
  }

  const handleDelete = (widget, evt) => {
    deleteWidget(widget);
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widget.map((w) => {
          return (
            <li key={w.id}>
              {Widget(w)}
              <button onClick={() => handleDelete(w)}>Delete</button>
              <button onClick={() =>updateUpdateState(w)}>Update</button>
            </li>
          )
        })}
      </ul>
      {updateState}
      <button onClick={updateAddState}>Show Add Form</button>
      {addState}
    </div>
  )
}

export default App
