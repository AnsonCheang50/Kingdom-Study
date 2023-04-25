import React from 'react';
import GameUnity from '../components/GameUnity';
import '../pages/Game.css';

const Game = () => {
	return (
		<div className="game-container">
			<GameUnity />
      <Stopwatch />
		</div>
	);
};

export default Game;
