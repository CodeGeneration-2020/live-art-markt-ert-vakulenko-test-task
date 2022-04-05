import { MiddlewareAPI } from 'redux';
import { TypeSocket } from 'typesocket';

import { WSActionType, MessageModel } from '../../../common/types';

export const socketMiddleware = (url: string) => (store: MiddlewareAPI<any, any>) => {
	const socket = new TypeSocket<MessageModel>(url);

	socket.on('connected', () => store.dispatch({ type: WSActionType.WS_CONNECTED }));
	socket.on('disconnected', () => store.dispatch({ type: WSActionType.WS_DISCONNECTED }));
	socket.on('rawMessage', (message) => store.dispatch({ type: WSActionType.WS_MESSAGE, payload: message }));
	socket.connect();

	return (next: (action: any) => void) => (action: any) => {
		if (action?.type === WSActionType.WS_SEND_MESSAGE && socket.readyState === 1) {
			socket.sendRaw(action.payload);
		}

		return next(action);
	};
};