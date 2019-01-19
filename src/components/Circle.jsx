import React from 'react';
import styled from 'styled-components';
import Image from '../icons/circle.png';

export default function Circle() {
    return <StyledCircle />;
}

const StyledCircle = styled.div`
    width: 100%;
    background-size: 100% 100%;
    height: 100%;
    background-image: url(${Image});
`;
