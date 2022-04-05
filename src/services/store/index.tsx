import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { socketMiddleware } from './middlewares/socket';

const logger = createLogger({
	// ...options
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, socketMiddleware('wss://hometask.eg1236.com/game1/'), sagaMiddleware]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware.apply(null, middlewares)));

sagaMiddleware.run(rootSaga);

export default store;