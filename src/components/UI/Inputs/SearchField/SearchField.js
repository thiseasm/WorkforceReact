import React from 'react';

import { InputGroup, FormControl } from 'react-bootstrap';

const searchField = props => (
	<InputGroup>
		<InputGroup.Prepend>
			<InputGroup.Text>Search</InputGroup.Text>
		</InputGroup.Prepend>
		<FormControl type='text' placeholder={props.placeholder} />
	</InputGroup>
);

export default searchField;
