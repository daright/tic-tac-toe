import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <StyledFooter>
            <h3>tic tac toe</h3>
        </StyledFooter>
    );
}

const StyledFooter = styled.header`
    padding: 0.1em 1em;
    background-color: #ddd;
    border-top: 1px solid black;
    & > h1 {
        margin: 0;
        padding: 0;
    }
`;
