import React, { useEffect, useState } from 'react'

function Widget (props) {

  console.log(props.aWidget)

  return (
    <div>
      Name: 
      {props.aWidget.name}
      <br/>
      Price:
      {props.aWidget.price}
      <br/>
      Manufacturer:
      {props.aWidget.mfg}
      <br/>
      Stock:
      {props.aWidget.inStock}
    </div>
  )
}

export default Widget