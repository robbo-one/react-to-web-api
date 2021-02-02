import React, { useEffect, useState } from 'react';
import Widget from "./Widget";

// import { getWidgets } from '../api'


function App () {

// const [widgets, setWidgets] = useState([])

// useEffect(() => {
//   getWidgets()
//     .then(widgets => {
//       setWidgets(widgets)
//     })
//   }, []
// )
  
 
  // return (
  //   <div>
  //     <h1>Widgets for the win!</h1>
  //     <ul>{widgets.map(widget => (
  //       <li key={widget.id}>
  //         <div>Name: {widget.name}</div>
  //         <div>In stock: {widget.inStock}</div>
  //         <div>MFG: {widget.mfg}</div>
  //       </li>
  //     ))}</ul>
  //   </div>
  // )

  return (
    <Widget />
  )
}

export default App
