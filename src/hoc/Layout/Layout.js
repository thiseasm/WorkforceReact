import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import ButtonToolbar from '../../components/UI/ButtonToolbar/ButtonToolbar';
import WorkForce from '../../containers/WorkForce/WorkForce';
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		activeTab: 'Employees'
	};

	changeTabHandler = tabName => {
		this.setState({ activeTab: tabName });
	};

	render() {
		const placeholder =
			this.state.activeTab === 'Employees' ? 'Name or Surname' : 'Title';
		return (
			<Auxiliary>
				<Navbar clicked={this.changeTabHandler} />
				<main className={classes.Main}>
					<ButtonToolbar placeholder={placeholder} />
					<WorkForce tab={this.state.activeTab} />
				</main>
			</Auxiliary>
		);
	}
}

export default Layout;
