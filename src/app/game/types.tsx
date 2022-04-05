import * as STATE from "./state";
import {WSActionType} from "../../common/types";

export type Action =
	| { type: typeof STATE.SAGATYPE_HOME_SELECT_DIFFICULT; payload: number | string }
	| { type: typeof STATE.SAGATYPE_HOME_SELECT_DIFFICULT_ASYNC; payload: number | string }
	| { type: typeof STATE.SAGATYPE_GAME_SELECT_CELL; payload: ICell }
	| { type: typeof STATE.SAGATYPE_GAME_SELECT_CELL_ASYNC; payload: ICell }
	| { type: typeof STATE.SAGATYPE_GAME_MAP; payload: string }
	| { type: typeof STATE.SAGATYPE_GAME_MAP_ASYNC; payload: string }
	| { type: typeof STATE.SAGATYPE_GAME_NOTIF_MESSAGE; payload: string }
	| { type: typeof STATE.SAGATYPE_GAME_CHANGE_ENDED; payload: boolean }
	| { type: typeof STATE.SAGATYPE_GAME_CLEAR; payload: any | void }
	| { type: typeof WSActionType.WS_CONNECTED; payload: any }
	| { type: typeof WSActionType.WS_DISCONNECTED; payload: any }
	| { type: typeof WSActionType.WS_SEND_MESSAGE; payload: any }
	| { type: typeof WSActionType.WS_MESSAGE; payload: any }
	;

export interface ICell {
	x: number | string;
	y: number | string;
}

export interface GameState {
	difficult: number | string;
	map: string;
	gameEnded: boolean;
	message: string;
	error?: string | null;
}