import React from 'react';

import Button from 'react-bootstrap/Button';

const button = props => (
	<Button variant='light' onClick={props.clicked}>
		{props.title}
	</Button>
);

export default button;
