import React from 'react';

import Button from '../../UI/ButtonToolbar/Button/Button';
import Form from 'react-bootstrap/Form';

const employeeForm = props => (
	<Form>
		<Form.Group>
			<Form.Label>Name</Form.Label>
			<Form.Control type='text' placeholder={props.name} />
		</Form.Group>
		<Form.Group>
			<Form.Label>Surname</Form.Label>
			<Form.Control type='text' placeholder={props.surname} />
		</Form.Group>
		<Form.Group>
			<Form.Label>Hired At</Form.Label>
			<Form.Control type='date' value={props.hiredAt} />
		</Form.Group>
		<Form.Group>
			<Form.Label>Skills</Form.Label>
			<Form.Control as='select' multiple>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</Form.Control>
		</Form.Group>
		<Button title='Create' />
	</Form>
);

export default employeeForm;
