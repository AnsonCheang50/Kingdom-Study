import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import MainNavigation from './components/navigation/MainNavigation';
import {
	Analysis,
	Game,
	LandingPage,
	PageNotFound,
	Planner,
} from './pages';
import { Login, Registration } from './pages/auth';

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route path="/" exact>
						<LandingPage />
					</Route>
					<Route path="/plan" exact>
						<Planner />
					</Route>
					<Route path="/game" exact>
						<Game />
					</Route>
					<Route path="/analyze" exact>
						<Analysis />
					</Route>
					<Route path="/error" exact>
						<PageNotFound />
					</Route>
					<Route path="/auth/login">
						<Login />
					</Route>
					<Route path="/auth/register">
						<Registration />
					</Route>
					<Redirect to="/error" />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
