import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import NewEmployeeForm from './Forms/EmployeeForm/NewEmployeeForm/NewEmployeeForm';
import NewSkillForm from './Forms/SkillForm/NewSkillForm/NewSkillForm';

const formManager = props => {
	return (
		<Auxiliary>
			{props.tab === 'Employees' ? (
				<NewEmployeeForm onClose={props.onClose} />
			) : (
				<NewSkillForm onClose={props.onClose} />
			)}
		</Auxiliary>
	);
};

export default formManager;
