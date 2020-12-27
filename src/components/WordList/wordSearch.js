const dfs = (boardLettersArray, i, j, count, word) => {
    if (count === word.length) {
        return true;
    }

    if (
        i < 0 ||
        i >= boardLettersArray.length ||
        j < 0 ||
        j >= boardLettersArray[i] ||
        boardLettersArray[i][j] != word[count]
    ) {
        return false;
    }

    const savedTemp = boardLettersArray[i][j];
    boardLettersArray[i][j] = ' ';
    const found =
        dfs(boardLettersArray, i - 1, j, count + 1, word) ||
        dfs(boardLettersArray, i + 1, j, count + 1, word) ||
        dfs(boardLettersArray, i, j - 1, count + 1, word) ||
        dfs(boardLettersArray, i, j + 1, count + 1, word) ||
        dfs(boardLettersArray, i - 1, j + 1, count + 1, word) ||
        dfs(boardLettersArray, i - 1, j - 1, count + 1, word) ||
        dfs(boardLettersArray, i + 1, j + 1, count + 1, word) ||
        dfs(boardLettersArray, i + 1, j - 1, count + 1, word);
    boardLettersArray[i][j] = savedTemp;
    return found;
};

const wordSearch = (word, boardLetters) => {
    const charsArray = word.split('');

    while (charsArray.includes('Q')) {
        const qIndex = charsArray.indexOf('Q');
        if (qIndex > -1 && charsArray[qIndex + 1] === 'U') {
            charsArray[qIndex] = 'QU';
            charsArray.splice(qIndex + 1, 1);
        } else {
            break;
        }
    }

    const boardLettersArray = [...boardLetters];
    const newArray = [];

    while (boardLettersArray.length > 0) {
        newArray.push(boardLettersArray.splice(0, 4));
    }

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray[i].length; j++) {
            if (
                newArray[i][j] === charsArray[0] &&
                dfs(newArray, i, j, 0, charsArray)
            ) {
                return true;
            }
        }
    }
    return false;
};

export default wordSearch;
