import React from 'react';
import styled from 'styled-components';

export default function Circle() {
    return <StyledCross />;
}

const StyledCross = styled.div`
    width: 100%;
    height: 100%;

    :before {
        content: '';
        border: 1px solid black;
    }
`;
