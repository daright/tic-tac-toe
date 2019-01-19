import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

function Menu(props) {
    console.log(props);
    return (
        <StyledNav isMenuOpen={props.isMenuOpen}>
            <Link to={'/game'}>Game</Link>
            <Link to={'/score'}>Score</Link>
        </StyledNav>
    );
}

const mapStateToProps = ({ menu }) => ({ isMenuOpen: menu.isMenuOpen });

export default connect(mapStateToProps)(Menu);

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    flex: 2;
    max-width: 200px;
    background-color: #eee;
    padding: 1em;
    & a {
        margin: 0.5em 0;
    }
    position: static;
    @media (max-width: 320px) {
        position: fixed;
        height: 100%;
        box-shadow: 2px 0px 22px 0px rgba(0, 0, 0, 0.75);
        left: ${({ isMenuOpen }) => (isMenuOpen ? 0 : '-100%')};
        transition: left 0.25s ease;
    }
`;
