import React from 'react';

import Card from 'react-bootstrap/Card';
import classes from './NoDataError.module.css';

const noDataError = props => (
	<Card className={classes.NoData}>
		It seems that there are no {props.title} entries. Try adding a new one!
	</Card>
);

export default noDataError;
