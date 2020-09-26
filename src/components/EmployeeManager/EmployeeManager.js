import React, { Component } from 'react';

import { Employees as EmApi } from '../../services/api/endpoints/Employees/Employees';
import Employees from '../../components/Employees/Employees';

class EmployeeManager extends Component {
	state = {
		elements: []
	};

	async componentDidMount() {
		const employees = await EmApi.index();
		this.setState({ elements: employees });
	}

	render() {
		return <Employees elements={this.state.elements} />;
	}
}

export default EmployeeManager;
