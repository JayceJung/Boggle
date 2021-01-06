const gameStatusReducer = (state = 'init', action) => {
    switch (action.type) {
        case 'STARTGAME':
            return 'started';
        case 'ENDGAME':
            return 'done';
        case 'NEWGAME':
            return 'init';
        case 'PENDING':
            return 'pending';
        default:
            return state;
    }
};

export default gameStatusReducer;
