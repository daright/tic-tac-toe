import { put, all, takeEvery, select } from 'redux-saga/effects';
import { CLICKED_FIELD, COMPLETE_GAME } from './actions';
import { findWinner } from '../utils';
import { DRAW } from './constants';

export function* rootSaga() {
    yield all([watchFieldClick()]);
}

export function* clickFieldAsync({ fieldIndex }) {
    yield put({ type: CLICKED_FIELD, fieldIndex });
    const numberOfSteps = yield select(({ game }) => game.numberOfSteps);
    if (numberOfSteps > 4) {
        const fields = yield select(({ game }) => game.fields);
        const winner = findWinner(fields);
        if (winner) {
            yield put({ type: COMPLETE_GAME, winner, numberOfSteps });
        } else if (numberOfSteps === 9) {
            yield put({ type: COMPLETE_GAME, winner: DRAW, numberOfSteps });
        }
    }
}

export function* watchFieldClick() {
    yield takeEvery('CLICK_FIELD', clickFieldAsync);
}
