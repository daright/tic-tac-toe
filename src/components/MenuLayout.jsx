import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Menu from './Menu';

export default function MenuLayout(props) {
    return (
        <StyledMenuLayout>
            <Menu />
            <StyledMenuContent>
                {props.children}
                <Footer />
            </StyledMenuContent>
        </StyledMenuLayout>
    );
}

const StyledMenuLayout = styled.section`
    display: flex;
    flex: 1;
`;

const StyledMenuContent = styled.section`
    display: flex;
    flex-direction: column;
    flex: 5;
`;
