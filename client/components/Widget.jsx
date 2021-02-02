import React from 'react'
import { deleteWidget } from '../api'

function Widget (props){
  
  const onClickHandler = (event) => {
    // console.log(props.info.id)
    deleteWidget (props.info.id)
    props.next()
  }
  
return (
  <>
<h2>{props.info.name}</h2>
<p>{props.info.mfg}</p>
<p>Qty in stock {props.info.inStock}</p>
<p>${props.info.price}</p>
 <button onClick= {onClickHandler}>
 DELETE 
 </button>
  </>
)
}

export default Widget