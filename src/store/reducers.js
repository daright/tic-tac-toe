import { CLICKED_FIELD, DECREMENT_TIMER, COMPLETE_GAME, START_GAME, RESET_GAME, SKIP_TURN } from './actions';
import { flipSymbol } from '../utils';

export const CROSS = 'CROSS';
export const CIRCLE = 'CIRCLE';
export const NOT_FILLED = 'NOT_FILLED';

const initialGameReducerState = {
    currentSymbol: CIRCLE,
    fields: new Array(9).fill(NOT_FILLED),
    gameInProgress: false
};

export const gameReducer = (state = initialGameReducerState, action) => {
    switch (action.type) {
        case CLICKED_FIELD:
            const fields = [...state.fields];
            fields[action.fieldIndex] = state.currentSymbol;
            return { ...state, fields, currentSymbol: flipSymbol(state.currentSymbol) };
        case COMPLETE_GAME:
        case RESET_GAME:
            return initialGameReducerState;
        case START_GAME:
            return { ...initialGameReducerState, gameInProgress: true };
        case SKIP_TURN:
            return { ...state, currentSymbol: flipSymbol(state.currentSymbol) };
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

const initialTimerState = {
    isActive: false,
    roundTimer: 30
};

export const timerReducer = (state = initialTimerState, action) => {
    switch (action.type) {
        case DECREMENT_TIMER:
            return { ...state, roundTimer: state.roundTimer - 1 };
        case START_GAME:
            return { ...state, isActive: true };
        case SKIP_TURN:
        case CLICKED_FIELD:
            return { ...state, roundTimer: initialTimerState.roundTimer };
        case COMPLETE_GAME:
        case RESET_GAME:
            return initialTimerState;
        default:
            return state;
    }
};
