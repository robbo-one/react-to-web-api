import React, { useEffect, useState } from "react";
import { getWidgets } from "../api.js";
import Widget from "./Widget"

function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    getWidgets().then((data) => {
      setWidgets(data);
    });
  }, []);

  return (
    <div>
    
        {widgets.map(widget => {return (<Widget name={widget.name} id={widget.id} price={widget.price} mfg={widget.mfg} inStock={widget.inStock} ></Widget>)})}
    
    </div>
  )
}

export default App;
