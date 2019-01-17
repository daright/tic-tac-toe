import React from 'react';
import { startGame, resetGame } from '../store/actions';
import { connect } from 'react-redux';

function GameController({ gameInProgress, startGame, resetGame }) {
    return gameInProgress ? <button onClick={resetGame}>RESET</button> : <button onClick={startGame}>START</button>;
}

export default connect(
    ({ game }) => ({ gameInProgress: game.gameInProgress }),
    { startGame, resetGame }
)(GameController);
