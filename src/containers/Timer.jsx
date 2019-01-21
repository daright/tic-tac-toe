import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrementTimer, skipTurn } from '../store/actions';

class Timer extends Component {
    state = {
        invervalId: null,
        numberOfSteps: 0
    };
    static getDerivedStateFromProps(props, state) {
        if (!props.isActive) {
            clearInterval(state.invervalId);
            return { invervalId: null };
        }
        if (props.numberOfSteps > state.numberOfSteps) {
            clearInterval(state.invervalId);
            const invervalId = setInterval(props.decrementTimer, 1000);
            return { invervalId };
        }
        if (props.isActive && !state.invervalId) {
            const invervalId = setInterval(props.decrementTimer, 1000);
            return { invervalId };
        }
        if (props.roundTimer === 0) {
            clearInterval(state.invervalId);
            props.skipTurn();
            return { invervalId: null };
        }
        return null;
    }
    render() {
        const { roundTimer } = this.props;
        return <p>{`Round timer: ${roundTimer}`}</p>;
    }
}
const mapStateToProps = ({ timer, game }) => ({
    roundTimer: timer.roundTimer,
    isActive: timer.isActive,
    numberOfSteps: game.numberOfSteps
});

export default connect(
    mapStateToProps,
    { decrementTimer, skipTurn }
)(Timer);
