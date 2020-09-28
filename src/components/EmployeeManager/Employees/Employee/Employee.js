import React from 'react';

const employee = props => (
	<tr onClick={() => props.clicked(props.id)}>
		<td>{props.name}</td>
		<td>{props.surname}</td>
		<td>{props.hiredAt}</td>
	</tr>
);

export default employee;
