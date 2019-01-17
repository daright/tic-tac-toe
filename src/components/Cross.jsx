import React from 'react';
import styled from 'styled-components';

export default function Cross() {
    return (
        <StyledWrapper>
            <Line left />
            <Line />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;

const Line = styled.div`
    width: 150%;
    height: 100%;
    border-bottom: ${props => (props.left ? '1px solid black' : '')};
    border-top: ${props => (props.left ? '' : '1px solid black')};
    transform: ${props => (props.left ? 'rotate(-45deg)' : 'translate(0, -100%) rotate(45deg)')};
    transform-origin: ${props => (props.left ? 'bottom left' : 'top left')};
`;
