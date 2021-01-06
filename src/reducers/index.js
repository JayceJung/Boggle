import wordsReducer from './words';
import gameStatusReducer from './gameStatus';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    words: wordsReducer,
    gameStatus: gameStatusReducer
});

export default rootReducer;
