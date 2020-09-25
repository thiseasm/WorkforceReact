import React from 'react';

import Button from 'react-bootstrap';

const skill = props => (
	<Button variant='light' onClick={props.clicked}>
		{props.title}
	</Button>
);

export default skill;
