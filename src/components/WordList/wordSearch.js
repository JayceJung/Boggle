const dfs = (lettersArray, i, j, count, word) => {
    if (count === word.length) {
        return true;
    }

    if (
        i < 0 ||
        i >= lettersArray.length ||
        j < 0 ||
        j >= lettersArray[i] ||
        lettersArray[i][j] != word[count]
    ) {
        return false;
    }

    const savedTemp = lettersArray[i][j];
    lettersArray[i][j] = ' ';
    const found =
        dfs(lettersArray, i - 1, j, count + 1, word) ||
        dfs(lettersArray, i + 1, j, count + 1, word) ||
        dfs(lettersArray, i, j - 1, count + 1, word) ||
        dfs(lettersArray, i, j + 1, count + 1, word) ||
        dfs(lettersArray, i - 1, j + 1, count + 1, word) ||
        dfs(lettersArray, i - 1, j - 1, count + 1, word) ||
        dfs(lettersArray, i + 1, j + 1, count + 1, word) ||
        dfs(lettersArray, i + 1, j - 1, count + 1, word);
    lettersArray[i][j] = savedTemp;
    return found;
};

const wordSearch = (word, letters) => {
    const lettersArray = [...letters];
    const newArray = [];
    while (lettersArray.length > 0) newArray.push(lettersArray.splice(0, 4));
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray[i].length; j++) {
            if (newArray[i][j] === word[0] && dfs(newArray, i, j, 0, word)) {
                return true;
            }
        }
    }
    return false;
};

export default wordSearch;
