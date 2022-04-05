import {takeLatest, takeEvery, put, all} from 'redux-saga/effects';
import * as STATE from './state';
import {Action} from "./types";
import { WSActionType } from '../../common/types';


function* selectDifficultAsync(action: Action) {
	try {
		yield put({
			type: WSActionType.WS_SEND_MESSAGE,
			payload: `new ${action.payload}`,
		});
		yield updateMapAsync();
	} catch (err) { // TODO call the cancel
		console.error('\n', STATE.SAGATYPE_HOME_SELECT_DIFFICULT_ASYNC, ':', err);
	}
}

export function* updateMapAsync() {
	yield put({
		type: WSActionType.WS_SEND_MESSAGE,
		payload: 'map',
	});
}

function* selectCellAsync(action: Action) {
	const { x, y } = action.payload;
	yield put({
		type: WSActionType.WS_SEND_MESSAGE,
		payload: `open ${y} ${x}`,
	});
	yield updateMapAsync();
}

export function* watchGameSagas() {
	yield all([
		takeLatest(STATE.SAGATYPE_HOME_SELECT_DIFFICULT, selectDifficultAsync),
		takeLatest(STATE.SAGATYPE_GAME_MAP_ASYNC, updateMapAsync),
		takeEvery(STATE.SAGATYPE_GAME_SELECT_CELL_ASYNC, selectCellAsync),
	]);
}