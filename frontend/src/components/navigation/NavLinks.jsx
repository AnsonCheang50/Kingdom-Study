import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
	return (
		<ul className="nav-links">
			<li>
				<NavLink to="/plan">Plan</NavLink>
				<NavLink to="/game">Game</NavLink>
				<NavLink to="/analyze">Analyze</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
