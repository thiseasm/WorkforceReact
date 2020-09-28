import React from 'react';

import FormManager from '../../components/FormManager/FormManager';

const formsContainer = props => (
	<FormManager
		tab={props.activeTab}
		detailsId={props.detailsId}
		onClose={props.onClose}
	/>
);

export default formsContainer;
