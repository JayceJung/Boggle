const wordsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADDWORD':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default wordsReducer;
