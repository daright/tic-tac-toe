import React from 'react';
import { connect } from 'react-redux';

function CurrentSymbolTurn({ currentSymbol }) {
    return <p>{`Current symbol turn ${currentSymbol}`}</p>;
}

const mapStateToProps = ({ game }) => ({ currentSymbol: game.currentSymbol });

export default connect(mapStateToProps)(CurrentSymbolTurn);
