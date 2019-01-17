import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function CompletedGamesList({ games }) {
    return (
        <section>
            <StyledList>
                {games.map(game => (
                    <li key={game.date}>{JSON.stringify(game)}</li>
                ))}
            </StyledList>
        </section>
    );
}
const mapStateToProps = ({ completed }) => ({ games: completed.games });

const StyledList = styled.ul`
    li:nth-child(odd) {
        background-color: #ddd;
    }
`;

export default connect(mapStateToProps)(CompletedGamesList);
