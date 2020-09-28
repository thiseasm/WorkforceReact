import React, { Component } from 'react';

import { Skills as SkApi } from '../../../../../services/api/endpoints/Skills/Skills';
import Button from '../../../../UI/ButtonToolbar/Button/Button';
import Form from 'react-bootstrap/Form';
import classes from './EditSkillForm.module.css';

class EditSkillForm extends Component {
	state = {
		id: this.props.id
	};

	async componentDidMount() {
		const skill = await SkApi.single(this.props.id);
		this.setState({
			createdAt: skill.createdAt,
			title: skill.title,
			description: skill.description
		});
	}

	inputChangeHandler = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};

	formSubmitHandler = event => {
		event.preventDefault();
		SkApi.create({
			id: this.state.id,
			title: this.state.title,
			description: this.state.description
		});
		this.props.onClose();
	};

	render() {
		return (
			<Form
				className={classes.EditSkillForm}
				onSubmit={event => {
					this.formSubmitHandler(event);
				}}>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control
						name='title'
						type='text'
						defaultValue={this.state.title}
						onChange={this.inputChangeHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						name='description'
						as='textarea'
						defaultValue={this.state.description}
						onChange={this.inputChangeHandler}
					/>
				</Form.Group>
				<Button title='Submit' type='Submit' />
				<Button title='Cancel' clicked={this.props.onClose} />
			</Form>
		);
	}
}

export default EditSkillForm;
