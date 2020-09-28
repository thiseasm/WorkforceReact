import React from 'react';

import NewSkillForm from './NewSkillForm/NewSkillForm';
import EditSkillForm from './EditSkillForm/EditSkillForm';

const skillEditor = props =>
	props.id === 0 ? (
		<NewSkillForm onClose={props.onClose} />
	) : (
		<EditSkillForm id={props.id} onClose={props.onClose} />
	);

export default skillEditor;
