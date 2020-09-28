import React, { Component } from 'react';

import { Employees as EmApi } from '../../../../../services/api/endpoints/Employees/Employees';
import Card from 'react-bootstrap/Card';
import classes from './EmployeeDetails.module.css';

class EmployeeDetails extends Component {
	state = {
		id: this.props.id
	};

	async componentDidMount() {
		const employee = await EmApi.single(this.props.id);
		const skills = Object.keys(employee.skills)
			.map(emKey => {
				return [...Array(employee.skills[emKey])].map(_ => {
					return employee.skills[emKey].title;
				});
			})
			.reduce((arr, el) => {
				return arr.concat(el, ' ');
			}, []);

		this.setState({
			hiredAt: employee.hiredAt,
			name: employee.name,
			surname: employee.surname,
			skills: skills
		});
	}

	deleteItemHandler = () => {
		EmApi.delete(this.props.id);
		this.props.onClose();
	};

	render() {
		return (
			<Card className={classes.EmployeeDetails}>
				<Card.Body>
					<Card.Title>
						{this.state.name} {this.state.surname}
					</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						Hired at: {this.state.hiredAt}
					</Card.Subtitle>
					<Card.Text>Skills: {this.state.skills}</Card.Text>
					<Card.Link
						className={classes.Edit}
						onClick={() => this.props.onEdit(this.props.key)}>
						Edit
					</Card.Link>
					<Card.Link
						className={classes.Delete}
						onClick={this.deleteItemHandler}>
						Delete
					</Card.Link>
					<Card.Link
						className={classes.Cancel}
						onClick={() => this.props.onClose()}>
						Cancel
					</Card.Link>
				</Card.Body>
			</Card>
		);
	}
}

export default EmployeeDetails;
