import React, { Component } from 'react';

import { Employees as EmApi } from '../../services/api/endpoints/Employees/Employees';
import Employees from './Employees/Employees';

class EmployeeManager extends Component {
	state = {
		elements: []
	};

	showDetails = id => {
		this.props.clicked(id);
	};

	async componentDidMount() {
		const employees = await EmApi.index();
		this.setState({ elements: employees });
	}

	render() {
		return (
			<Employees
				elements={this.state.elements}
				clicked={this.showDetails}
			/>
		);
	}
}

export default EmployeeManager;
