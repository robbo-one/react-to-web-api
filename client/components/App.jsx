import React, { useImperativeHandle } from 'react'
import { useState, useEffect } from 'react'
import { getWidgets } from '../api.js'
import AddWidget from './AddWidget.jsx'
import Widget from './Widget'



function App () {
  const [widgets, setWidgets] = useState([])

  const [adding, setAdding] = useState(false)

  useEffect(() => {
    // console.log('using the effect')
    getWidgets()
      .then(result => {
        setWidgets(result)
      })
  }, [] )

  
  return (
    <div>
      <h1>Widgets for the win!</h1>
      {widgets.map(widget => {        
        return (
          <ul>
            <li key={widget.id}>
              <Widget widget={widget} setWidgets={setWidgets} />
            </li>
          </ul>
        )
      })}
      <button onClick={() => setAdding(!adding)}>
        { adding ? 'Cancel' : 'Add widget'}
      </button>
      {adding && (
        <AddWidget setWidgets={setWidgets} />
      )}
    </div>
  )
}

export default App
