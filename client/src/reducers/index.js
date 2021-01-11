import wordsReducer from './words';
import gameStatusReducer from './gameStatus';
import animationStatusReducer from './animationStart';
import gameCodeReducer from './gameCode';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    words: wordsReducer,
    gameStatus: gameStatusReducer,
    animationStatus: animationStatusReducer,
    gameCode: gameCodeReducer
});

export default rootReducer;
