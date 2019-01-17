import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { gameReducer, completedGamesReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(combineReducers({ game: gameReducer, completed: completedGamesReducer }), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
