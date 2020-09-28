import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import NewSkillForm from './Forms/SkillForm/NewSkillForm/NewSkillForm';
import EmployeeDetails from '../EmployeeManager/Employees/Employee/EmployeeDetails/EmployeeDetails';
import SkillDetails from '../SkillsManager/Skills/Skill/SkillDetails/SkillDetails';
import EmployeeEditor from './Forms/EmployeeEditor/EmployeeEditor';

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
				) : this.state.id === 0 ? (
					<NewSkillForm onClose={this.props.onClose} />
				) : (
					<SkillDetails
						clicked={this.editButtonClickedHandler}
						id={this.state.id}
						onClose={this.props.onClose}
					/>
				)}
			</Auxiliary>
		);
	}
}

export default FormManager;
