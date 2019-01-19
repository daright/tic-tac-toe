import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { gameReducer, completedGamesReducer, timerReducer, menuReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    combineReducers({ game: gameReducer, completed: completedGamesReducer, timer: timerReducer, menu: menuReducer }),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
