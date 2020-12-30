import React, { useState } from 'react';
import WordListItem from '../WordListItem/wordListItem';
import './wordList.css';
import wordSearch from './wordSearch';

export default function WordList(props) {
    const letters = props.array;
    const [inputValue, setInputValue] = useState('');
    const [wordsArray, setWordsArray] = useState([]);
    const [placeHolder, setPlaceHolder] = useState('Enter words!');

    const scrollToBottom = () => {
        const listDiv = document.getElementById('list');
        listDiv.scrollTop = listDiv.scrollHeight;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const wordMakeable = wordSearch(inputValue, letters);

        if (inputValue.length <= 2) {
            setInputValue('');
            setPlaceHolder('Word is too short!');
        } else if (!wordMakeable) {
            setInputValue('');
            setPlaceHolder("Word can't be made!");
        } else if (
            inputValue != '' &&
            !wordsArray.includes(inputValue) &&
            wordMakeable
        ) {
            setWordsArray([...wordsArray, inputValue]);
            setInputValue('');
            setPlaceHolder('');
            scrollToBottom();
        } else if (wordsArray.includes(inputValue)) {
            setInputValue('');
            setPlaceHolder('Word already in list!');
        }
    };

    const handleChange = (value) => {
        if (/^[a-zA-Z]*$/g.test(value)) {
            setInputValue(value.toUpperCase());
        }
    };
    console.log('WordList Array: ', props.array);

    return (
        <div className="wordListSection">
            <div className="list" id="list">
                <WordListItem words={wordsArray} />
            </div>
            <div className="inputDiv">
                <form onSubmit={handleSubmit}>
                    <input
                        className={'inputField'}
                        type="text"
                        value={inputValue}
                        onChange={(event) => handleChange(event.target.value)}
                        onSubmit={(event) => handleSubmit(event)}
                        placeholder={placeHolder}
                    />
                </form>
            </div>
        </div>
    );
}
