import React from 'react';
import { startGame, resetGame } from '../store/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

function GameController({ gameInProgress, startGame, resetGame }) {
    return gameInProgress ? <StyledButton onClick={resetGame}>RESET</StyledButton> : <StyledButton onClick={startGame}>START</StyledButton>;
}

const StyledButton = styled.button`
    margin: 1em 0;
`;

export default connect(
    ({ game }) => ({ gameInProgress: game.gameInProgress }),
    { startGame, resetGame }
)(GameController);
