import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import FormManager from '../../components/FormManager/FormManager';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import ButtonToolbar from '../../components/UI/ButtonToolbar/ButtonToolbar';
import WorkForce from '../../containers/WorkForce/WorkForce';
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		activeTab: 'Employees',
		showForm: false,
		showEdit: false,
		detailsId: 0
	};

	showDetailsHandler = id => {
		this.setState({
			showForm: true,
			showEdit: false,
			detailsId: id
		});
	};

	changeTabHandler = tabName => {
		this.setState({
			activeTab: tabName,
			showForm: false,
			showEdit: false,
			detailsId: 0
		});
	};

	createNewHandler = () => {
		this.setState({ showForm: true, showEdit: true, detailsId: 0 });
	};

	exitFormHandler = () => {
		this.setState({ showForm: false, showEdit: false, detailsId: 0 });
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
							showEdit={this.state.showEdit}
							detailsId={this.state.detailsId}
							onClose={this.exitFormHandler}
						/>
					) : (
						<WorkForce
							tab={this.state.activeTab}
							showDetails={this.showDetailsHandler}
						/>
					)}
				</main>
			</Auxiliary>
		);
	}
}

export default Layout;
