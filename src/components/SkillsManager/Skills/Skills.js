import React from 'react';

import SkillsContainer from '../../../containers/SkillsContainer/SkillsContainer';
import classes from './Skills.module.css';

const skills = props => (
	<div className={classes.Skills}>
		<SkillsContainer>{props.elements}</SkillsContainer>
	</div>
);

export default skills;
