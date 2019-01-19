import { put, all, takeEvery, select } from 'redux-saga/effects';
import { CLICKED_FIELD, COMPLETE_GAME } from './actions';
import { findWinner, numberOfSteps } from '../utils';

export function* rootSaga() {
    yield all([watchFieldClick()]);
}

export function* clickFieldAsync({ fieldIndex }) {
    yield put({ type: CLICKED_FIELD, fieldIndex });
    const fields = yield select(({ game }) => game.fields);
    const winner = findWinner(fields);
    console.log(numberOfSteps(fields), fields);
    if (winner) {
        yield put({ type: COMPLETE_GAME, winner, numberOfSteps: numberOfSteps(fields) });
    }
}

export function* watchFieldClick() {
    yield takeEvery('CLICK_FIELD', clickFieldAsync);
}
