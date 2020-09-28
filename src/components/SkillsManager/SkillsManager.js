import React, { Component } from 'react';

import { Skills as SkApi } from '../../services/api/endpoints/Skills/Skills';
import Skills from '../../components/SkillsManager/Skills/Skills';

class SkillsManager extends Component {
	state = {
		elements: []
	};

	showDetails = id => {
		this.props.clicked(id);
	};

	async componentDidMount() {
		const skills = await SkApi.index();
		this.setState({ elements: skills });
	}

	render() {
		return (
			<Skills elements={this.state.elements} clicked={this.showDetails} />
		);
	}
}

export default SkillsManager;
