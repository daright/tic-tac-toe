import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function CompletedGamesList({ games }) {
    return (
        <StyledList>
            {games.map(({ date, winner, numberOfSteps }) => (
                <StyledListItem key={date}>{`Winner: ${winner} - ${date} - Number of turns ${numberOfSteps}`}</StyledListItem>
            ))}
        </StyledList>
    );
}
const mapStateToProps = ({ completed }) => ({ games: completed.games });

const StyledList = styled.ul`
    flex: 1;
    padding: 0;
    li {
        list-style: none;
    }
    li:nth-child(odd) {
        background-color: #ddd;
    }
`;

const StyledListItem = styled.li`
    min-height: 4em;
    padding: 0 1em;
    display: flex;
    align-items: center;
`;

export default connect(mapStateToProps)(CompletedGamesList);
