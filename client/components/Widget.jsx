import React from 'react'

function Widget (props){
return (
  <>
<h2>{props.info.name}</h2>
<p>{props.info.mfg}</p>
<p>Qty in stock {props.info.inStock}</p>
<p>${props.info.price}</p>
  </>
)
}

export default Widget