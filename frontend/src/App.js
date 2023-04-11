import { React, useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import MainNavigation from './components/navigation/MainNavigation';
import { Analysis, Game, LandingPage, PageNotFound, Planner } from './pages';
import { Login, Registration } from './pages/auth';

const App = () => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	// useEffect(() => {
	// 	const data = Boolean(window.localStorage.getItem('isLogin'));
	// 	console.log(typeof data);
	// 	if (data) setIsLogin(data);
	// }, []);

	// useEffect(() => {
	// 	window.localStorage.setItem('isLogin', isLogin);
	// 	console.log(typeof isLogin);
	// }, [isLogin]);

	return (
		<Router>
			<MainNavigation user={user} setUser={setUser} />
			<main className="App">
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route path="/plan" exact element={<Planner />} />
					<Route path="/game" exact element={<Game />} />
					<Route path="/analyze" exact element={<Analysis />} />
					<Route
						path="/login"
						element={
							<Login setToken={setToken} globalUser={user} setGlobalUser={setUser} />
						}
					/>
					<Route path="/register" element={<Registration />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</main>
		</Router>
	);
};

export default App;
