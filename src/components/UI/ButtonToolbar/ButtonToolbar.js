import React from 'react';

import Button from './Button/Button';
import SearchField from '../Inputs/SearchField/SearchField';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import classes from './ButtonToolbar.module.css';

const buttonToolbar = props => (
	<ButtonToolbar className={classes.ButtonToolbar}>
		<Button
			className={classes.Button}
			onClick={props.createNewHandler}
			title='Create'
		/>
		<SearchField placeholder={props.placeholder} />
	</ButtonToolbar>
);

export default buttonToolbar;
