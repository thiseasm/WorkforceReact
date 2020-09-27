import React from 'react';

import Popover from 'react-bootstrap/Popover';

const popover = props => (
	<Popover>
		<Popover.Content>{props.children}</Popover.Content>
	</Popover>
);

export default popover;
