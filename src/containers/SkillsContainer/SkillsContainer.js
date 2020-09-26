import React from 'react';

import NoDataError from '../../components/UI/ErrorMessages/NoDataError/NoDataError';

const skillsContainer = props =>
	props.children.length > 0 ? (
		<div>{props.children}</div>
	) : (
		<NoDataError title='Skill' />
	);
export default skillsContainer;
