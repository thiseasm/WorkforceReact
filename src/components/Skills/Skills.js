import React from 'react';

import NoDataError from '../UI/ErrorMessages/NoDataError/NoDataError';
import classes from './Skills.module.css';

const skills = props => (
	<div className={classes.Skills}>
		<NoDataError title='Skill' />
	</div>
);

export default skills;
