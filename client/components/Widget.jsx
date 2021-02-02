import React, { useState, useEffect } from 'react'
import { deleteWidget, getWidgets } from '../api.js'

function Widget() {
	const [widget, setWidget] = useState([])

	useEffect(() => {
		getWidgets()
			.then(res =>
				setWidget(res)
			)
	}, [])

	const handleDelete = (widget, evt) => {
		deleteWidget(widget)
		 .then(getWidgets)
	}

	return (
		<ul>
			{widget.map(aWidget => (
				<>
					<h1>{aWidget.name}</h1>
					<li key={aWidget.price}> Price: {aWidget.price}</li>
					<li key={aWidget.mfg}> Manufacturer: {aWidget.mfg}</li>
					<li key={aWidget.inStock}>Still in stock: {aWidget.inStock}</li>
					<button onClick={() => handleDelete(aWidget)} >Delete Widget</button>
				</>
			))}
		</ul>
	)

}

export default Widget