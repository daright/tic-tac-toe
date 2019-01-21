import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleMenuButton } from '../store/actions';

function Menu({ location, toggleMenuButton, isMenuOpen }) {
    const { pathname } = location;
    return (
        <StyledNav isMenuOpen={isMenuOpen}>
            <StyledLink to={'/game'} onClick={toggleMenuButton}>
                <StyledNavButton isActive={pathname === '/game'}>Game</StyledNavButton>
            </StyledLink>
            <StyledLink to={'/score'} onClick={toggleMenuButton}>
                <StyledNavButton isActive={pathname === '/score'}>Score</StyledNavButton>
            </StyledLink>
        </StyledNav>
    );
}

const mapStateToProps = ({ menu }) => ({ isMenuOpen: menu.isMenuOpen });

export default withRouter(
    connect(
        mapStateToProps,
        { toggleMenuButton }
    )(Menu)
);

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const StyledNavButton = styled.button`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
    color: #000;
    border: none;
    cursor: pointer;
    outline: none;
    :hover,
    :active {
        background-color: #fff;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    flex: 2;
    max-width: 200px;
    background-color: #eee;
    min-width: 150px;
    position: static;
    @media (max-width: 320px) {
        position: fixed;
        height: 100%;
        box-shadow: 0px -20px 20px 0px rgba(0, 0, 0, 0.75);
        left: ${({ isMenuOpen }) => (isMenuOpen ? 0 : '-100%')};
        transition: left 0.25s ease;
    }
`;
