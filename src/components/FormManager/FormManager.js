import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import EmployeeDetails from '../EmployeeManager/Employees/Employee/EmployeeDetails/EmployeeDetails';
import SkillDetails from '../SkillsManager/Skills/Skill/SkillDetails/SkillDetails';
import EmployeeEditor from './Forms/EmployeeEditor/EmployeeEditor';
import SkillEditor from './Forms/SkillEditor/SkillEditor';

class FormManager extends Component {
	state = {
		id: this.props.detailsId,
		showEdit: this.props.showEdit
	};

	editButtonClickedHandler = () => {
		this.setState({ showEdit: true });
	};

	render() {
		return (
			<Auxiliary>
				{this.props.tab === 'Employees' ? (
					!this.state.showEdit ? (
						<EmployeeDetails
							onEdit={this.editButtonClickedHandler}
							id={this.state.id}
							onClose={this.props.onClose}
						/>
					) : (
						<EmployeeEditor
							id={this.state.id}
							onClose={this.props.onClose}
						/>
					)
				) : !this.state.showEdit ? (
					<SkillDetails
						clicked={this.editButtonClickedHandler}
						id={this.state.id}
						onClose={this.props.onClose}
					/>
				) : (
					<SkillEditor
						id={this.state.id}
						onClose={this.props.onClose}
					/>
				)}
			</Auxiliary>
		);
	}
}

export default FormManager;
