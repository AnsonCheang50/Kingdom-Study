import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
	return (
		<ul className="nav-links">
			<li>
				{props.links.map((link) => {
					return (<NavLink to = {`/${link}`}>{link.charAt(0).toUpperCase() + link.substring(1)}</NavLink>)
				})}
			</li>
		</ul>
	);
};

export default NavLinks;
