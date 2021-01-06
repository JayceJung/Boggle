export const addWord = (word) => {
    return {
        type: 'ADDWORD',
        payload: word
    };
};

export const startGame = () => {
    return {
        type: 'STARTGAME'
    };
};

export const endGame = () => {
    return {
        type: 'ENDGAME'
    };
};
