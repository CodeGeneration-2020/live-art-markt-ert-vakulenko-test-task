import { watchGameSagas } from '../../app/game/saga';
import { watchMessageSagas } from '../../app/socket/saga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([
		fork(watchMessageSagas),
		fork(watchGameSagas),
	]);
}