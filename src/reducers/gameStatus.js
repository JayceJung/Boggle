const gameStatusReducer = (state = 'init', action) => {
    switch (action.type) {
        case 'STARTGAME':
            return 'started';
        case 'ENDGAME':
            return 'done';
        default:
            return state;
    }
};

export default gameStatusReducer;
