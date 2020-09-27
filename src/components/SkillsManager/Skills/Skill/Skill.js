import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

const skill = props => (
	<Button variant='light' onClick={() => props.onClickedHandler(props.id)}>
		{props.title}
	</Button>
);

export default skill;
