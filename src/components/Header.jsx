import React from 'react';
import styled from 'styled-components';
import MenuButton from '../containers/MenuButton';

export default function Header() {
    return (
        <StyledHeader>
            <MenuButton />
            <h1>TIC TAC TOE</h1>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    padding: 1em;
    background-color: #1f1f1f;
    color: #fff;
    z-index: 100;
    & > h1 {
        margin: 0;
        padding: 0;
    }
`;
