import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { gameReducer, completedGamesReducer, timerReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    combineReducers({ game: gameReducer, completed: completedGamesReducer, timer: timerReducer }),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
