import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <StyledFooter>
            <p>tic tac toe</p>
        </StyledFooter>
    );
}

const StyledFooter = styled.header`
    padding: 0.1em 1em;
    background-color: #1f1f1f;
    color: #ddd;
    border-top: 1px solid black;
    & > h1 {
        margin: 0;
        padding: 0;
    }
`;
