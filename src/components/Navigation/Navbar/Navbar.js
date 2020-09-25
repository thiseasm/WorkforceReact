import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import NavigationItems from '../NavigationItems/NavigationItems';

const navbar = props => (
	<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
		<Navbar.Brand>WorkForce</Navbar.Brand>
		<Navbar.Toggle aria-controls='responsive-navbar-nav' />
		<Navbar.Collapse>
			<NavigationItems clicked={props.clicked} />
		</Navbar.Collapse>
	</Navbar>
);

export default navbar;
