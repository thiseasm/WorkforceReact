import React from 'react';

import Skill from '../Skills/Skill/Skill';
import SkillsContainer from '../../../containers/SkillsContainer/SkillsContainer';
import classes from './Skills.module.css';

const skills = props => {
	let skillComponents = Object.keys(props.elements)
		.map(emKey => {
			return [...Array(props.elements[emKey])].map(_ => {
				return (
					<Skill
						key={emKey}
						id={props.elements[emKey].id}
						title={props.elements[emKey].title}
						description={props.elements[emKey].description}
						clicked={props.clicked}
					/>
				);
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	return (
		<div className={classes.Skills}>
			<SkillsContainer>{skillComponents}</SkillsContainer>
		</div>
	);
};

export default skills;
