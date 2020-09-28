import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import EmployeeManager from '../../components/EmployeeManager/EmployeeManager';
import SkillsManager from '../../components/SkillsManager/SkillsManager';

const workForce = props => (
	<Auxiliary>
		{props.tab === 'Employees' ? <EmployeeManager /> : <SkillsManager />}
	</Auxiliary>
);

export default workForce;
