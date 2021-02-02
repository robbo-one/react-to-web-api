import React, {useState, useEffect} from 'react'
import {getWidgets} from '../api'
import Widget from './Widget'
// import Link from 'react-router-dom'
import AddWidget from "./AddWidget"
// import {Route} from 'react-router-dom'

function App () {
  const fetchData = () => {
    getWidgets()
    .then(res => {
      setWidgets(res)
    })

  }
  const [widgets, setWidgets]= useState([])
  const [showButts, setShowButts] = useState(true) 
  
  function displayWidgies (){
    setShowButts (!showButts)
  }
  useEffect(() => {
    fetchData() 
  },[])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      {/* <Route path='/api/v1/widgets' exact component AddWidget/>       */}
    {(showButts && <button onClick=  {displayWidgies} >   
      click butt to add Widgies
    </button>)}
    {(!showButts && <AddWidget next={fetchData} displayWidgies={displayWidgies} />)}
      {widgets.map(widget => {
        return <Widget info = {widget} next={fetchData} />
      } )}
    </div>
  )
}




export default App
