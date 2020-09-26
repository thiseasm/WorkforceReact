import React, { Component } from 'react';

import { Employees as EmApi } from '../../services/api/endpoints/Employees/Employees';
import { Skills as SkApi } from '../../services/api/endpoints/Skills/Skills';
import Employees from '../../components/Employees/Employees';
import Skills from '../../components/Skills/Skills';
import classes from './WorkForce.module.css';

class WorkForce extends Component {
	state = {
		elements: []
	};

	async componentDidMount() {
		if (this.props.tab === 'Employees') {
			const employees = await EmApi.index();
			this.setState({ elements: employees });
		} else {
			const skills = await SkApi.index();
			this.setState({ elements: skills });
		}
	}

	render() {
		return (
			<div className={classes.WorkForce}>
				{this.props.tab === 'Employees' ? (
					<Employees elements={this.state.elements} />
				) : (
					<Skills elements={this.state.elements} />
				)}
			</div>
		);
	}
}

export default WorkForce;
