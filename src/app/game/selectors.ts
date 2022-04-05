import {createSelector} from 'reselect';

import {GameState} from './types';

import {RootState} from '../../services/store/reducers';

const getGame = (state: RootState) => state.game;

export const getGameSelector = createSelector(getGame, (game: GameState) => game);