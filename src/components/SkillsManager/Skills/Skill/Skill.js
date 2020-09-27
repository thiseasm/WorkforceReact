import React from 'react';

import Button from 'react-bootstrap/Button';
import SkillDetails from './SkillDetails/SkillDetails';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from '../../../UI/Popover/Popover';

const skill = props => (
	<OverlayTrigger
		trigger='click'
		placement='right'
		overlay={
			<Popover>
				<SkillDetails id={props.id} />
			</Popover>
		}>
		<Button variant='light'>{props.title}</Button>
	</OverlayTrigger>
);

export default skill;
