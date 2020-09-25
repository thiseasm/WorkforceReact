import React from 'react';

import Nav from 'react-bootstrap/Nav';

const navigationItem = props => (
	<Nav className='ml-auto'>
		<Nav.Link onClick={() => props.clicked('Employees')}>
			Employees
		</Nav.Link>
		<Nav.Link onClick={() => props.clicked('Skills')}>Skills</Nav.Link>
	</Nav>
);

export default navigationItem;
