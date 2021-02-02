import React from "react";

function Widget(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>Price:{props.price}</h2>
      <h3>MFG: {props.mfg}</h3>
      <h4>inStock: {props.inStock}</h4>

    </div>
  );
}

export default Widget;
