import React, { useEffect, useState } from 'react';
import WordListItem from '../WordListItem/wordListItem';
import './wordList.css';
import wordSearch from './wordSearch';

export default function WordList(props) {
    const letters = props.array;
    const [inputValue, setInputValue] = useState('');
    const [wordsArray, setWordsArray] = useState([]);
    const [placeHolder, setPlaceHolder] = useState('');

    const scrollToBottom = () => {
        const listDiv = document.getElementById('list');
        listDiv.scrollTop = listDiv.scrollHeight;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const wordMakeable = wordSearch(inputValue, letters);

        if (inputValue.length <= 2) {
            setInputValue('');
            setPlaceHolder('WORD IS TOO SHORT!');
        } else if (!wordMakeable) {
            setInputValue('');
            setPlaceHolder("WORD CAN'T BE MADE!");
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
            setPlaceHolder('WORD ALREADY IN LIST!');
        }
    };

    const handleChange = (value) => {
        if (/^[a-zA-Z]*$/g.test(value)) {
            setInputValue(value.toUpperCase());
        }
    };

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
                        disabled={props.gameStatus === 'started' ? false : true}
                        placeholder={placeHolder}
                    />
                </form>
            </div>
        </div>
    );
}
