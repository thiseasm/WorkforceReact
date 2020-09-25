import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import EmployeeTable from './EmployeeTable/EmployeeTable';

import classes from './Employees.module.css';

const employees = props => (
	<div className={classes.Employees}>
		<EmployeeTable>{[]}</EmployeeTable>
	</div>
);

export default employees;
