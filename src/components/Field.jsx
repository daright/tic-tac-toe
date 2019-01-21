import React from 'react';
import styled from 'styled-components';
import Cross from './Cross';
import { CROSS, CIRCLE, NOT_FILLED } from '../store/constants';
import Circle from './Circle';
import { clickField } from '../store/actions';
import { connect } from 'react-redux';

function Field({ field, index, clickField, gameInProgress }) {
    const onClickField = () => {
        if (field === NOT_FILLED && gameInProgress) {
            clickField(index);
        }
    };
    return <StyledField onClick={onClickField}>{field === CROSS ? <Cross /> : field === CIRCLE ? <Circle /> : null}</StyledField>;
}

export default connect(
    ({ game }) => ({ gameInProgress: game.gameInProgress }),
    { clickField: clickField }
)(Field);

const StyledField = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #777;
    overflow: hidden;
`;
