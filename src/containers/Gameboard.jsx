import React from 'react';
import styled from 'styled-components';
import Field from '../components/Field';
import { connect } from 'react-redux';
import CurrentSymbolTurn from './CurrentSymbolTurn';
import Timer from './Timer';
import GameController from './GameController';

function Gameboard({ fields }) {
    return (
        <StyledWrapper>
            <CurrentSymbolTurn />
            <Timer />
            <GameController />
            <StyledBoardLayout>
                {fields.map((field, index) => (
                    <Field key={index} index={index} field={field} />
                ))}
            </StyledBoardLayout>
        </StyledWrapper>
    );
}

const StyledBoardLayout = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 5em);
    grid-auto-rows: minmax(5em, auto);
    justify-content: center;
    padding: 1em;
`;

const StyledWrapper = styled.section`
    flex: 1;
    padding: 1em;
`;

const mapStateToProps = ({ game }) => ({ fields: game.fields });

export default connect(mapStateToProps)(Gameboard);
