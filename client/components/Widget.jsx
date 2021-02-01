import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api.js'

function Widget() {
	const [widget, setWidget] = useState([])

	useEffect(() => {
		getWidgets()
			.then(res =>
				setWidget(res)
			)
	}, [])


	return (
		<ul>
			{widget.map(aWidget => (
				<li key={aWidget.id}>{aWidget.name}</li>
			))}
			<li></li>
		</ul>
	)

}

export default Widget