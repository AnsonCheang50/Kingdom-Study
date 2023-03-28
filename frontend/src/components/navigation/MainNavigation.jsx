import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = (props) => {
	const LandingPageLinks = ["login","register"]; //This is how to create an array in js
	const OtherLinks = ["plan","game","analyze"]; 


  return (
		<MainHeader className='main-header'>
			<h1 className="main-navigation__title">
				<Link to='/'>Kingdom Study</Link>
			</h1>
			<nav>
				{props.isLogin ? (
					<NavLinks links = {OtherLinks}/>
				) : (
					<NavLinks links = {LandingPageLinks}/>
				)}
			</nav>
		</MainHeader>
  );
};

export default MainNavigation;