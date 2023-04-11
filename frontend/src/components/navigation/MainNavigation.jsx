import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = (props) => {
	const LandingPageLinks = ['login', 'register'];
	const OtherLinks = ['plan', 'game'];

	return (
		<MainHeader className="main-header">
			<h1 className="main-navigation__title">
				<Link to="/">Kingdom Study</Link>
			</h1>
			<nav>
				{props.isLogin ? (
					<NavLinks
						isLogin={props.isLogin}
						onLogout={props.onLogout}
						links={OtherLinks}
					/>
				) : (
					<NavLinks
						isLogin={props.isLogin}
						onLogout={props.onLogout}
						links={LandingPageLinks}
					/>
				)}
			</nav>
		</MainHeader>
	);
};

export default MainNavigation;
