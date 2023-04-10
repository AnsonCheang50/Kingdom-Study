import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
	let keyNum = 1;
	return (
		<ul className="nav-links">
			{props.links.map((link) => {
				return (
					<li key={keyNum++}>
						<NavLink to={`/${link}`}>
							{link.charAt(0).toUpperCase() + link.substring(1)}
						</NavLink>
					</li>
				);
			})}
			<li key={keyNum}>
				{props.isLogin && (
					<NavLink to={'/'} onClick={props.onLogout}>
						Logout
					</NavLink>
				)}
			</li>
		</ul>
	);
};

export default NavLinks;
