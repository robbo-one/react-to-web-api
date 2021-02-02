import React, { useEffect, useState } from "react";
import { getWidgets, removeWidget } from "../api.js";
import Widget from "./Widget";
import AddWidget from "./AddWidget"
function App() {
  const [widgets, setWidgets] = useState([]);
  const [button, setButton] = useState(false);


  useEffect(() => {
    getWidgets().then((data) => {
      setWidgets(data);
    });
  }, []);


  const deleteWidget = (id) => {

    removeWidget(id)
    .then((data)=>{
      setWidgets(data);
    })
  }

  return (
    <div>
      {widgets.map((widget) => {
        return (
          <div>
          <Widget
            name={widget.name}
            key={widget.id}
            price={widget.price}
            mfg={widget.mfg}
            inStock={widget.inStock}
          />
          <button onClick={() => deleteWidget(widget.id)}>Delete</button>
          </div>
        );
      })}

      <button onClick={() => setButton(true)}>Add Widget</button>
      {button && <AddWidget />}
    
    </div>
  );
}

export default App;
