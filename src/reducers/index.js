import wordsReducer from './words';
import gameStatusReducer from './gameStatus';
import animationStatusReducer from './animationStart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    words: wordsReducer,
    gameStatus: gameStatusReducer,
    animationStatus: animationStatusReducer
});

export default rootReducer;
