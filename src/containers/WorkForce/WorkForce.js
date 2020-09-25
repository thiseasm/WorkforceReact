import React from 'react';

import Employees from '../../components/Employees/Employees';
import classes from './WorkForce.module.css';

const workForce = props => (
	<div className={classes.WorkForce}>
		<Employees />
	</div>
);

export default workForce;
