import React from 'react';

import Button from 'react-bootstrap';
import Popover from '../../UI/Popover/Popover;';

const skill = props => (
	<OverlayTrigger
		trigger='click'
		placement='top'
		overlay={<Popover>{props.detail}</Popover>}>
		<Button variant='light'>{props.title}</Button>
	</OverlayTrigger>
);

export default skill;
