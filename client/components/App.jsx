import React, { useEffect, useState } from "react";
import { getWidgets } from "../api.js";
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

  return (
    <div>
      {widgets.map((widget) => {
        return (
          <Widget
            name={widget.name}
            key={widget.id}
            price={widget.price}
            mfg={widget.mfg}
            inStock={widget.inStock}
          ></Widget>
        );
      })}

      <button onClick={() => setButton(true)}>Add Widget</button>
      {button && <AddWidget />}
    
    </div>
  );
}

export default App;
