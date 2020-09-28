import React from 'react';

import Button from 'react-bootstrap/Button';

const skill = props => (
	<Button variant='light' onClick={() => props.clicked(props.id)}>
		{props.title}
	</Button>
);

export default skill;
