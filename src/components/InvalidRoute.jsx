import React from 'react';
import styled from 'styled-components';

export default function InvalidRoute() {
    return <StyledSection>INVALID URL</StyledSection>;
}

const StyledSection = styled.section`
    flex: 1;
    padding: 1em;
`;
