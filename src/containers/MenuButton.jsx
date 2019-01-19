import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleMenuButton } from '../store/actions';
import { ReactComponent as Menu } from '../icons/menu.svg';

function MenuButton({ toggleMenuButton }) {
    return (
        <StyledButton onClick={toggleMenuButton}>
            <Menu />
        </StyledButton>
    );
}

const StyledButton = styled.button`
    display: none;
    margin: 0.5em 1em 0.5em 0;
    border: none;
    outline: none;
    cursor: pointer;
    & > svg {
        width: 2em;
    }
    @media (max-width: 320px) {
        display: block;
    }
`;

export default connect(
    null,
    { toggleMenuButton }
)(MenuButton);
