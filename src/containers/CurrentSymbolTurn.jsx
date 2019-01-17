import React from 'react';
import { connect } from 'react-redux';

function CurrentSymbolTurn({ currentSymbol }) {
    return <h2>{`Current symbol turn ${currentSymbol}`}</h2>;
}

const mapStateToProps = ({ game }) => ({ currentSymbol: game.currentSymbol });

export default connect(mapStateToProps)(CurrentSymbolTurn);
