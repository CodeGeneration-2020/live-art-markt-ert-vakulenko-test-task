export enum WSActionType {
	WS_CONNECTED = 'WS_CONNECTED',
	WS_DISCONNECTED = 'WS_DISCONNECTED',
	WS_MESSAGE = 'WS_MESSAGE',
	WS_SEND_MESSAGE = 'WS_SEND_MESSAGE',
}

export enum WSMessageActionType {
	map = 'map',
	open = 'open',
}

export interface MessageModel {
	type: string,
}