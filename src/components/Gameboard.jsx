import React from 'react';
import styled from 'styled-components';
import Field from './Field';
import { connect } from 'react-redux';
import CurrentSymbolTurn from '../containers/CurrentSymbolTurn';
import Timer from './Timer';

function Gameboard({ fields }) {
    return (
        <div>
            <CurrentSymbolTurn />
            <Timer />
            <StyledBoardLayout>
                {fields.map((field, index) => (
                    <Field key={index} index={index} field={field} />
                ))}
            </StyledBoardLayout>
        </div>
    );
}

const StyledBoardLayout = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(5em, auto);
`;

const mapStateToProps = ({ game }) => ({ fields: game.fields });

export default connect(mapStateToProps)(Gameboard);
