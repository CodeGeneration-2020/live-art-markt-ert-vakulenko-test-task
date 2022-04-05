import { all, takeEvery, put } from 'redux-saga/effects';
import {BREACK_LINE, END_MESSAGE, WIN_MESSAGE} from '../../common/constants';
import {WSActionType, WSMessageActionType} from '../../common/types';
import * as STATE from '../game/state';
import { Action } from '../game/types';

function parseMapItems(map: string): string {
	const newMap = map
		.split(BREACK_LINE)
		.filter((n: string) => n)
		.join('\n');

	return newMap;
}

function parseEndedMsg(msg: string) { // TODO change to regexp parsing
	if (
		msg.trim() === END_MESSAGE
		|| msg.trim() === WIN_MESSAGE
	) {
		return true
	}
}

function* messageAsync(action: Action) {
	const msg: string = action.payload;
	try {
		const [keyType, ...actionValues] = msg.split(':');
		const actionValue = actionValues.join(':').trim();
		// console.log('\nkeyType:', keyType);
		// console.log('value:', actionValue);

		switch (keyType) {
			case WSMessageActionType.map: {
				const map = parseMapItems(actionValue);

				yield put({ type: STATE.SAGATYPE_GAME_MAP, payload: map });
			}break;
			// TODO actually I can add some check handler to 'open' response if it's not 'OK' we're don't need send update map request, can be expand logic
			case WSMessageActionType.open: {
				const theEnd = parseEndedMsg(actionValue);

				yield put({ type: STATE.SAGATYPE_GAME_NOTIF_MESSAGE, payload: actionValue });

				if (theEnd) {
					yield put({ type: STATE.SAGATYPE_GAME_CHANGE_ENDED, payload: theEnd });
				}
			}break;
		}
	} catch (err) { // TODO handle error
	}
}

// TODO can be add disconnect handler and show some alert for reconnecting or something like that...
export function* watchMessageSagas() {
	yield all([
		takeEvery(WSActionType.WS_MESSAGE, messageAsync),
	]);
}