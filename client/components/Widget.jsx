import React from "react"

export function Widget(props) {
  return (
    <div>
    Name: {props.name} <br></br>
    Mfg: {props.mfg} <br></br>
    Price: {props.price} <br></br>
    In Stock: {props.inStock}
  </div>
  )
}
