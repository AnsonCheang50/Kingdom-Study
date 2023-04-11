import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = ({user, setUser, links}) => {
	let keyNum = 1;
	let login = false;

	const onLogout = () => setUser(false);

	// if (user) login = true;

	return (
		<ul className="nav-links">
			{links.map((link) => {
				return (
					<li key={keyNum++}>
						<NavLink to={`/${link}`}>
							{link.charAt(0).toUpperCase() + link.substring(1)}
						</NavLink>
					</li>
				);
			})}
			<li key={keyNum}>
				{user && (
					<NavLink to={'/'} onClick={onLogout}>
						Logout
					</NavLink>
				)}
			</li>
		</ul>
	);
};

export default NavLinks;
