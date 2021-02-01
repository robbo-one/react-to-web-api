import React from 'react'

const Widgets = () => {
    const [widgets, setWidgets] = useState([])
  
    useEffect(() => {
      getWidgets()
      console.log('using the effect')
    }, [])
}
  
 

export default Widgets
