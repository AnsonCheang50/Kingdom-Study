import { React, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import MainNavigation from './components/navigation/MainNavigation';
import { Analysis, Game, LandingPage, PageNotFound, Planner } from './pages';
import { Login, Registration } from './pages/auth';

const App = () => {
	const [isLogin, setIsLogin] = useState(false);

	console.log(isLogin);

	const login = () => {
		setIsLogin(true);
	};

	const logout = () => {
		setIsLogin(false);
		// Reroute on logout => Render LandingPage
	};

	return (
		<Router>
			<MainNavigation
				isLogin={isLogin}
				onLogout={logout}
				onLogin={login}
			/>
			<main>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route path="/plan" exact element={<Planner />} />
					<Route path="/game" exact element={<Game />} />
					<Route path="/analyze" exact element={<Analysis />} />
					<Route path="/login" element={<Login onLogin={login} />} />
					<Route path="/register" element={<Registration />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</main>
		</Router>
	);
};

export default App;
