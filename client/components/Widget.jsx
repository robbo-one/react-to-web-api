import React, { useEffect, useState } from 'react';

import { getWidgets } from '../api';

const Widget = () => {
  const [widgets, setWidgets] = useState([]);

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
      <ul>{widgets.map(widget => (
        <li key={widget.id}>
          <div>Name: {widget.name}</div>
          <div>In stock: {widget.inStock}</div>
          <div>MFG: {widget.mfg}</div>
        </li>
      ))}</ul>
    </div>
  )

}

export default Widget