import React from 'react';
import { connect } from 'react-redux';

function Timer({ roundTimer }) {
    return <h3>{`Round timer: 00:${roundTimer}`}</h3>;
}
const mapStateToProps = ({ game }) => ({ roundTimer: game.roundTimer });

export default connect(mapStateToProps)(Timer);
