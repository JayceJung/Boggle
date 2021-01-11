const gameCodeReducer = (state = null, action) => {
    switch (action.type) {
        case 'NEWGAMECODE':
            return action.payload;
        default:
            return state;
    }
};

export default gameCodeReducer;
