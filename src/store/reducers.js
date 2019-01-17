import { CLICKED_FIELD, DECREMENT_TIMER, COMPLETE_GAME } from './actions';
import { flipSymbol } from '../utils';

export const CROSS = 'CROSS';
export const CIRCLE = 'CIRCLE';
export const NOT_FILLED = 'NOT_FILLED';

const initialGameReducerState = {
    currentSymbol: CIRCLE,
    fields: new Array(9).fill(NOT_FILLED),
    roundTimer: 30
};

export const gameReducer = (state = initialGameReducerState, action) => {
    console.log(action);
    switch (action.type) {
        case CLICKED_FIELD:
            const fields = [...state.fields];
            fields[action.fieldIndex] = state.currentSymbol;
            return { ...state, fields, currentSymbol: flipSymbol(state.currentSymbol), roundTimer: 30 };
        case DECREMENT_TIMER:
            return { ...state, roundTimer: state.roundTimer - 1 };
        case COMPLETE_GAME:
            return initialGameReducerState;
        default:
            return state;
    }
};

const initialCompletedGamesState = {
    games: []
};

export const completedGamesReducer = (state = initialCompletedGamesState, action) => {
    switch (action.type) {
        case COMPLETE_GAME:
            const { winner, numberOfTurns } = action;
            return { ...state, games: [...state.games, { winner, numberOfTurns, date: new Date() }] };

        default:
            return state;
    }
};
