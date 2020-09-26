import React, { Component } from 'react';

import EmployeeTable from '../../containers/EmployeeTable/EmployeeTable';

import classes from './Employees.module.css';

class Employees extends Component {
	render() {
		return (
			<div className={classes.Employees}>
				<EmployeeTable>{[]}</EmployeeTable>
			</div>
		);
	}
}

export default Employees;
