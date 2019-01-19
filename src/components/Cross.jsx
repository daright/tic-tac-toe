import React from 'react';
import styled from 'styled-components';
import Image from '../icons/cross.png';

export default function Cross() {
    return <StyledCross />;
}

const StyledCross = styled.div`
    width: 100%;
    background-size: 100% 100%;
    height: 100%;
    background-image: url(${Image});
`;
