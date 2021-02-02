import React, { useEffect, useState } from "react";
import { getWidgets } from "../api.js";
import Widget from "./Widget";
import AddWidget from "./AddWidget"
function App() {
  const [widgets, setWidgets] = useState([]);


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
      <AddWidget />
    
    </div>
  );
}

export default App;
