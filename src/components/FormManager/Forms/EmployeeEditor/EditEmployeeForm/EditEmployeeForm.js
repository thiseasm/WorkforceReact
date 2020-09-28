import React, { Component } from 'react';

import Button from '../../../../UI/ButtonToolbar/Button/Button';
import Form from 'react-bootstrap/Form';
import { Employees as EmApi } from '../../../../../services/api/endpoints/Employees/Employees';
import { Skills as SkApi } from '../../../../../services/api/endpoints/Skills/Skills';
import classes from './EditEmployeeForm.module.css';

class EditEmployeeForm extends Component {
	state = {
		id: this.props.id
	};

	async componentDidMount() {
		const employee = await EmApi.single(this.props.id);
		const skills = await SkApi.index();

		let skillOptions = Object.keys(skills)
			.map(emKey => {
				return [...Array(skills[emKey])].map(_ => {
					return (
						<option key={emKey} value={skills[emKey].id}>
							{skills[emKey].title}
						</option>
					);
				});
			})
			.reduce((arr, el) => {
				return arr.concat(el);
			}, []);

		this.setState({
			hiredAt: employee.hiredAt,
			name: employee.name,
			surname: employee.surname,
			skills: skillOptions
		});
	}

	inputChangeHandler = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};

	multiSelectChangeHandler = event => {
		const options = event.target.options;
		const value = [];
		for (let i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
				const skillId = parseInt(options[i].value);
				value.push(skillId);
			}
		}
		this.setState({ skillIds: value });
	};

	formSubmitHandler = event => {
		event.preventDefault();
		EmApi.create({
			id: this.state.id,
			name: this.state.name,
			surname: this.state.surname,
			hiredAt: this.state.hiredAt,
			skillIds: this.state.skillIds
		});
		this.props.onClose();
	};

	render() {
		return (
			<Form
				className={classes.EditEmployeeForm}
				onSubmit={this.formSubmitHandler}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						name='name'
						type='text'
						defaultValue={this.state.name}
						onChange={this.inputChangeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Surname</Form.Label>
					<Form.Control
						name='surname'
						type='text'
						defaultValue={this.state.surname}
						onChange={this.inputChangeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Hired At</Form.Label>
					<Form.Control
						name='hiredAt'
						type='date'
						value={this.state.hiredAt}
						onChange={this.inputChangeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Skills</Form.Label>
					<Form.Control
						name='skills'
						as='select'
						multiple
						onChange={this.multiSelectChangeHandler}>
						{this.state.skills}
					</Form.Control>
				</Form.Group>
				<Button title='Submit' type='Submit' />
				<Button title='Cancel' clicked={this.props.onClose} />
			</Form>
		);
	}
}

export default EditEmployeeForm;
