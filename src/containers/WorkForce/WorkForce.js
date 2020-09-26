import React, { Component } from 'react';

import EmployeeManager from '../../components/EmployeeManager/EmployeeManager';
import EmployeeForm from '../../components/Forms/EmployeeForm/EmployeeForm';
import SkillsManager from '../../components/SkillsManager/SkillsManager';

class WorkForce extends Component {
	render() {
		console.log(this.props.showForm);
		return (
			<div>
				{this.props.tab === 'Employees' ? (
					this.props.showForm ? (
						<EmployeeForm />
					) : (
						<EmployeeManager />
					)
				) : (
					<SkillsManager />
				)}
			</div>
		);
	}
}

export default WorkForce;
