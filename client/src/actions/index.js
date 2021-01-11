export const addWord = (word) => {
    return {
        type: 'ADDWORD',
        payload: word
    };
};

export const resetWordsList = (word) => {
    return {
        type: 'RESETWORDSLIST'
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
};

export const pendingGame = () => {
    return {
        type: 'PENDING'
    };
};

export const animationStatusChange = () => {
    return {
        type: 'SWITCHSTATUS'
    };
};

export const newGameCode = (gameCode) => {
    return {
        type: 'NEWGAMECODE',
        payload: gameCode
    };
};
