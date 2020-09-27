import React from 'react';

import Button from '../../UI/ButtonToolbar/Button/Button';
import Form from 'react-bootstrap/Form';
import classes from './EmployeeForm.module.css';

const employeeForm = props => (
	<Form className={classes.EmployeeForm}>
		<Form.Group>
			<Form.Label>Name</Form.Label>
			<Form.Control type='text' defaultValue={props.name} />
		</Form.Group>
		<Form.Group>
			<Form.Label>Surname</Form.Label>
			<Form.Control type='text' defaultValue={props.surname} />
		</Form.Group>
		<Form.Group>
			<Form.Label>Hired At</Form.Label>
			<Form.Control type='date' defaultValue={props.hiredAt} />
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
		<Button title='Cancel' clicked={props.onCancel} />
	</Form>
);

export default employeeForm;
