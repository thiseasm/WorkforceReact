import React from 'react';

import Card from 'react-bootstrap/Card';
import classes from './SkillDetails.module.css';

const skillDetails = props => (
	<Card className={classes.SkillDetails}>
		<Card.Body>
			<Card.Title>{props.title}</Card.Title>
			<Card.Subtitle className='mb-2 text-muted'>
				Created at: {props.createdAt}
			</Card.Subtitle>
			<Card.Text>{props.description}</Card.Text>
			<Card.Link
				className={classes.Edit}
				onClick={() => props.onEdit(props.key)}>
				Card Link
			</Card.Link>
			<Card.Link
				className={classes.Delete}
				onClick={() => props.onDelete(props.key)}>
				Another Link
			</Card.Link>
		</Card.Body>
	</Card>
);

export default skillDetails;
