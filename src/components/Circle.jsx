import React from 'react';
import styled from 'styled-components';

export default function Circle() {
    return <StyledCircle />;
}

const StyledCircle = styled.div`
    width: 100%;
    background-size: 100% 100%;
    height: 100%;
    background-image: url('https://cdn.onlinewebfonts.com/svg/img_461940.png');
`;
