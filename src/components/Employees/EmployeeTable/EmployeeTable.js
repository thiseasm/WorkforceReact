import React from 'react';

import Table from 'react-bootstrap/Table';
import classes from './EmployeeTable.module.css';

const employeeTable = props =>
	props.children.length > 0 ? (
		<Table striped bordered hover className={classes.EmployeeTable}>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Surname</th>
					<th>Hired At</th>
				</tr>
			</thead>
			<tbody>{props.children}</tbody>
		</Table>
	) : null;

export default employeeTable;
