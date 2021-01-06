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

export const initGame = () => {
    return {
        type: 'NEWGAME'
    };
}

export const pendingGame = () => {
    return {
        type: 'PENDING'
    };
}