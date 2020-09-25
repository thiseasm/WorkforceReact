import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		activeTab: 'Employees'
	};

	changeTabHandler = tabName => {
		this.setState({ activeTab: tabName });
	};

	render() {
		console.log(this.state.activeTab);
		return (
			<Auxiliary>
				<main className={classes.Main}>{this.props.children}</main>
			</Auxiliary>
		);
	}
}

export default Layout;
