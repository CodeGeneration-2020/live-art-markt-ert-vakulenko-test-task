import * as STATE from './state';
import { Action } from './types';

export const selectDifAction = (
	payload: any
): Action => ({
	type: STATE.SAGATYPE_HOME_SELECT_DIFFICULT,
	payload,
});

export const selectCellAction = (
	x: number | string,
	y: number | string,
): Action => ({
	type: STATE.SAGATYPE_GAME_SELECT_CELL_ASYNC,
	payload: { x, y },
});

export const clearAction = (payload?: any | void): Action => ({ type: STATE.SAGATYPE_GAME_CLEAR, payload });
