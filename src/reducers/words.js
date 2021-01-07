const wordsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADDWORD':
            return [...state, action.payload];
        case 'RESETWORDSLIST':
            return [];
        default:
            return state;
    }
};

export default wordsReducer;
