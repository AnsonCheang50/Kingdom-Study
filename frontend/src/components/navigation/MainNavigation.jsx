import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = ({ user, setUser }) => {
	const LandingPageLinks = ['login', 'register'];
	const OtherLinks = ['plan', 'game'];

	return (
		<MainHeader className="main-header">
			<h1 className="main-navigation__title">
				<Link to="/">Kingdom Study</Link>
			</h1>
			<nav>
				{user ? (
					<NavLinks
						user={user}
						setUser={setUser}
						links={OtherLinks}
					/>
				) : (
					<NavLinks
						user={user}
						setUser={setUser}
						links={LandingPageLinks}
					/>
				)}
			</nav>
		</MainHeader>
	);
};

export default MainNavigation;
