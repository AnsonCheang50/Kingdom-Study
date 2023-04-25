import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPage } from '../../features/site/siteSlice';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = ({ user, setUser }) => {
	const LandingPageLinks = ['login', 'register'];
	const OtherLinks = ['plan', 'game'];

	const dispatch = useDispatch();

	return (
		<MainHeader className="main-header">
			<h1 className="main-navigation__title">
				<Link onClick={() => dispatch(setCurrentPage('landing'))} to="/">
					Kingdom Study
				</Link>
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
