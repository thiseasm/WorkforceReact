import React from 'react';

import Employee from '../Employees/Employee/Employee';
import EmployeeTable from '../../containers/EmployeeTable/EmployeeTable';

import classes from './Employees.module.css';

const employees = props => {
	let employeeComponents = Object.keys(props.elements)
		.map(emKey => {
			return [...Array(props.elements[emKey])].map(_ => {
				return (
					<Employee
						key={emKey}
						name={props.elements[emKey].name}
						surname={props.elements[emKey].surname}
						hiredAt={props.elements[emKey].hiredAt}
						id={props.elements[emKey].id}
					/>
				);
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	return (
		<div className={classes.Employees}>
			<EmployeeTable>{employeeComponents}</EmployeeTable>
		</div>
	);
};

export default employees;
