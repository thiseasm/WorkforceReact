import React from 'react';

import Table from 'react-bootstrap/Table';
import NoDataError from '../../UI/ErrorMessages/NoDataError/NoDataError';
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
	) : (
		<NoDataError title='Employee' />
	);

export default employeeTable;
