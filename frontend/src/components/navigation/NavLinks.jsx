import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
	return (
		<ul className="nav-links">
			<li>
				<NavLink to="/plan">plan</NavLink>
				<NavLink to="/game">game</NavLink>
				<NavLink to="/analyze">analyze</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
