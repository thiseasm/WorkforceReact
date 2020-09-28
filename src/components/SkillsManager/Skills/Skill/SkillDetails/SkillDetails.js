import React, { Component } from 'react';

import { Skills as SkApi } from '../../../../../services/api/endpoints/Skills/Skills';
import Card from 'react-bootstrap/Card';
import classes from './SkillDetails.module.css';

class SkillDetails extends Component {
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

	deleteItemHandler = () => {
		SkApi.delete(this.props.id);
		this.props.onClose();
	};

	render() {
		return (
			<Card className={classes.SkillDetails}>
				<Card.Body>
					<Card.Title>{this.state.title}</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						Created at: {this.state.createdAt}
					</Card.Subtitle>
					<Card.Text>{this.state.description}</Card.Text>
					<Card.Link
						className={classes.Edit}
						onClick={() => this.props.clicked(this.props.id)}>
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

export default SkillDetails;
