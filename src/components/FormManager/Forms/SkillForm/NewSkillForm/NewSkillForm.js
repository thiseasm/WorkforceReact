import React, { Component } from 'react';

import { Skills } from '../../../../../services/api/endpoints/Skills/Skills';
import Button from '../../../../UI/ButtonToolbar/Button/Button';
import Form from 'react-bootstrap/Form';
import classes from './NewSkillForm.module.css';

class NewSkillForm extends Component {
	state = {
		id: 0,
		title: '',
		description: ''
	};

	inputChangeHandler = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};

	formSubmitHandler = event => {
		event.preventDefault();
		Skills.create({
			id: this.state.id,
			title: this.state.title,
			description: this.state.description
		});
		this.props.onClose();
	};

	render() {
		return (
			<Form
				className={classes.NewSkillForm}
				onSubmit={event => {
					this.formSubmitHandler(event);
				}}>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control
						name='title'
						type='text'
						onChange={this.inputChangeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						name='description'
						as='textarea'
						onChange={this.inputChangeHandler}
					/>
				</Form.Group>
				<Button title='Submit' type='Submit' />
				<Button title='Cancel' clicked={this.props.onClose} />
			</Form>
		);
	}
}

export default NewSkillForm;
