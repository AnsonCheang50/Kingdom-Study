import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { setCurrentPage } from '../../features/site/siteSlice';
import './NavLinks.css';
import { selectCurrentPage } from '../../features/site/siteSlice';

const NavLinks = ({ user, setUser, links }) => {
	const dispatch = useDispatch();

	let keyNum = 1;

	const onLogout = () => {
		setUser(null);
		localStorage.removeItem('user');
		dispatch(setCurrentPage('landing'));
	};

	const clickHandler = (link) => {
		dispatch(setCurrentPage(link));
	};

	const isGamePage = useSelector(selectCurrentPage);

	return (
		<ul className="nav-links">
			{links.map((link) => {
				return (
					<li key={keyNum++}>
						<NavLink
							onClick={() => clickHandler(link)}
							to={`/${link}`}
						>
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
