import { put, all, takeEvery, select } from 'redux-saga/effects';
import { CLICKED_FIELD, DECREMENT_TIMER, CHECK_WINNER, COMPLETE_GAME } from './actions';
import { findWinner, numberOfSteps } from '../utils';

export function* rootSaga() {
    yield all([watchFieldClick()]);
}

export function* clickFieldAsync({ fieldIndex }) {
    console.log('click async', fieldIndex);
    yield put({ type: CLICKED_FIELD, fieldIndex });
    const fields = yield select(({ game }) => game.fields);
    console.log(fields);
    const winner = findWinner(fields);
    console.log(winner);
    if (winner) {
        yield put({ type: COMPLETE_GAME, winner, numberOfSteps: numberOfSteps(fields) });
    }
}

export function* watchFieldClick() {
    yield takeEvery('CLICK_FIELD', clickFieldAsync);
}

export function* watchIncrementAsync() {
    yield takeEvery('CLICK_FIELD', clickFieldAsync);
}
function* gen() {
    console.log('asd');
    yield put({ type: DECREMENT_TIMER });
}
