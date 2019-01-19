import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function CompletedGamesList({ games }) {
    console.log(games);
    return (
        <StyledList>
            {games.map(({ date, winner, numberOfSteps }) => (
                <li key={date}>{`Winner: ${winner} - ${date} - Number of turns ${numberOfSteps}`}</li>
            ))}
        </StyledList>
    );
}
const mapStateToProps = ({ completed }) => ({ games: completed.games });

const StyledList = styled.ul`
    flex: 1;
    li {
        list-style: none;
    }
    li:nth-child(odd) {
        background-color: #ddd;
    }
`;

export default connect(mapStateToProps)(CompletedGamesList);
