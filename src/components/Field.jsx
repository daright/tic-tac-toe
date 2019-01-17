import React from 'react';
import styled from 'styled-components';
import Cross from './Cross';
import { CROSS, CIRCLE, NOT_FILLED } from '../store/reducers';
import Circle from './Circle';
import { clickField } from '../store/actions';
import { connect } from 'react-redux';

function Field({ field, index, clickField }) {
    const onClickField = () => {
        if (field === NOT_FILLED) {
            clickField(index);
        }
    };
    return <StyledField onClick={onClickField}>{field === CROSS ? <Cross /> : field === CIRCLE ? <Circle /> : field}</StyledField>;
}

export default connect(
    null,
    { clickField: clickField }
)(Field);

const StyledField = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    overflow: hidden;
`;
