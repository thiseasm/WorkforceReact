import React from 'react';

import Employees from '../../components/Employees/Employees';
import Skills from '../../components/Skills/Skills';
import classes from './WorkForce.module.css';

const workForce = props => (
	<div className={classes.WorkForce}>
		{props.tab === 'Employees' ? <Employees /> : <Skills>{[]}</Skills>}
	</div>
);

export default workForce;
