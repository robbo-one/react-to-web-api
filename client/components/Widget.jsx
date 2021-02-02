import React from "react";

// function Widget(props) {
//   let widgy = props.widgy
//   return <li key={widgy.id}>{widgy.name}, {widgy.price}, {widgy.mfg}, {widgy.inStock}</li>
// }

function Widget({ widgy }) {
    return (
    <li key={widgy.id}>{widgy.name}, {widgy.price}, {widgy.mfg}, {widgy.inStock}</li>
    )
}

export default Widget;
