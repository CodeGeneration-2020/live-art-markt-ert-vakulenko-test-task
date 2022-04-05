import * as STATE from './state';
import {GameState, Action} from './types';

const initialState: GameState = {
	difficult: '',
	map: '',
	gameEnded: false,
	message: '',
	error: null,
};

export default (state = initialState, action: Action) => {
	switch (action.type) {
		case STATE.SAGATYPE_HOME_SELECT_DIFFICULT:
			return {
				...state,
				difficult: action.payload,
			};
		case STATE.SAGATYPE_GAME_MAP:
			return {
				...state,
				map: action.payload,
			};
		case STATE.SAGATYPE_GAME_NOTIF_MESSAGE:
			return {
				...state,
				message: action.payload.trim(),
			};
		case STATE.SAGATYPE_GAME_CHANGE_ENDED:
			return {
				...state,
				gameEnded: action.payload,
			};
		case STATE.SAGATYPE_GAME_CLEAR:
			return {...initialState};
		default:
			return state;
	}
};