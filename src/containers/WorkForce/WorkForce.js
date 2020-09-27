import React from 'react';

import EmployeeManager from '../../components/EmployeeManager/EmployeeManager';
import EmployeeForm from '../../components/Forms/EmployeeForm/EmployeeForm';
import SkillsManager from '../../components/SkillsManager/SkillsManager';
import SkillForm from '../../components/Forms/SkillForm/SkillForm';

const workForce = props => (
	<div>
		{props.tab === 'Employees' ? (
			props.showForm ? (
				<EmployeeForm onCancel={props.onCancel} />
			) : (
				<EmployeeManager />
			)
		) : props.showForm ? (
			<SkillForm
				id='0'
				title=''
				description=''
				onCancel={props.onCancel}
			/>
		) : (
			<SkillsManager />
		)}
	</div>
);

export default workForce;
