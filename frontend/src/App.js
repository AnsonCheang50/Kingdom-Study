import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import Analysis from './pages/Analysis';
import Game from './pages/Game';
import LandingPage from './pages/LandingPage';
import MainNavigation from './components/navigation/MainNavigation';
import Planner from './pages/Planner';
import PageNotFound from './pages/PageNotFound';

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
					<Redirect to="/error" />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
