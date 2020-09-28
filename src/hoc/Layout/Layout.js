import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import ButtonToolbar from '../../components/UI/ButtonToolbar/ButtonToolbar';
import WorkForce from '../../containers/WorkForce/WorkForce';
import FormManager from '../../components/FormManager/FormManager';
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		activeTab: 'Employees',
		showForm: false
	};

	changeTabHandler = tabName => {
		this.setState({ activeTab: tabName });
	};

	createNewHandler = () => {
		this.setState({ showForm: true });
	};

	exitFormHandler = () => {
		this.setState({ showForm: false });
	};

	render() {
		const placeholder =
			this.state.activeTab === 'Employees' ? 'Name or Surname' : 'Title';

		return (
			<Auxiliary>
				<Navbar clicked={this.changeTabHandler} />
				<main className={classes.Main}>
					<ButtonToolbar
						placeholder={placeholder}
						onCreate={this.createNewHandler}
					/>
					{this.state.showForm ? (
						<FormManager
							tab={this.state.activeTab}
							onClose={this.exitFormHandler}
						/>
					) : (
						<WorkForce tab={this.state.activeTab} />
					)}
				</main>
			</Auxiliary>
		);
	}
}

export default Layout;
