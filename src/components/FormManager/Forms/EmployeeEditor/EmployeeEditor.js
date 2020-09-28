import React from 'react';

import NewEmployeeForm from './NewEmployeeForm/NewEmployeeForm';
import EditEmployeeForm from './EditEmployeeForm/EditEmployeeForm';

const employeeEditor = props =>
	props.id === 0 ? (
		<NewEmployeeForm onClose={props.onClose} />
	) : (
		<EditEmployeeForm id={props.id} onClose={props.onClose} />
	);

export default employeeEditor;
