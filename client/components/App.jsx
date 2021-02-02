import React, { useEffect, useState } from "react";
import { getWidgets } from "../api";
import Widget from "./Widget";

function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    getWidgets().then(setWidgets);
  }, []);

  return (
    <div>
      <h1>Widgets for the win!</h1>

      <div>
        <ul>
          {widgets.map((wid) => <Widget widgy={wid} /> )}
        </ul>
      </div>
    </div>
  );
}

export default App;

/*

return <Widget widgy={wid} banana={true} />


const oneThing = {
  widgy: wid,
  banana: true
}
return Widget(oneThing)

*/