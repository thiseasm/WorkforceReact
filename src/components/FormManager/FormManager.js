import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import NewEmployeeForm from './Forms/EmployeeForm/NewEmployeeForm/NewEmployeeForm';
import NewSkillForm from './Forms/SkillForm/NewSkillForm/NewSkillForm';
import EmployeeDetails from '../EmployeeManager/Employees/Employee/EmployeeDetails/EmployeeDetails';
import SkillDetails from '../SkillsManager/Skills/Skill/SkillDetails/SkillDetails';

const formManager = props => {
	return (
		<Auxiliary>
			{props.tab === 'Employees' ? (
				props.detailsId === 0 ? (
					<NewEmployeeForm onClose={props.onClose} />
				) : (
					<EmployeeDetails
						id={props.detailsId}
						onClose={props.onClose}
					/>
				)
			) : props.detailsId === 0 ? (
				<NewSkillForm onClose={props.onClose} />
			) : (
				<SkillDetails id={props.detailsId} onClose={props.onClose} />
			)}
		</Auxiliary>
	);
};

export default formManager;
