import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrementTimer, skipTurn } from '../store/actions';

class Timer extends Component {
    state = {
        invervalId: null
    };
    static getDerivedStateFromProps(props, state) {
        if (props.isActive && !state.invervalId) {
            const invervalId = setInterval(props.decrementTimer, 1000);
            return { invervalId };
        } else if (!props.isActive) {
            clearInterval(state.invervalId);
            return { invervalId: null };
        } else if (props.roundTimer === 0) {
            clearInterval(state.invervalId);
            props.skipTurn();
            return { invervalId: null };
        }
        return null;
    }
    render() {
        const { roundTimer } = this.props;
        return <h3>{`Round timer: ${roundTimer}`}</h3>;
    }
}
const mapStateToProps = ({ timer }) => ({ roundTimer: timer.roundTimer, isActive: timer.isActive });

export default connect(
    mapStateToProps,
    { decrementTimer, skipTurn }
)(Timer);
