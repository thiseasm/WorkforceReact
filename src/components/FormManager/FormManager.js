import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import NewEmployeeForm from './Forms/EmployeeForm/NewEmployeeForm/NewEmployeeForm';
import NewSkillForm from './Forms/SkillForm/NewSkillForm/NewSkillForm';

const formManager = props => (
	<Auxiliary>
		{props.tab === 'Employees' ? (
			<NewEmployeeForm onClose={props.onClose} />
		) : (
			<NewSkillForm
				id='0'
				title=''
				description=''
				onClose={props.onClose}
			/>
		)}
	</Auxiliary>
);

export default formManager;
