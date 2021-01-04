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

    let listClass = 'list';
    if (props.gameStatus === 'done' && !listClass.includes('done')) {
        listClass = listClass + ' done';
    }

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

    let renderInput = () => {
        return (
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
        );
    };

    return (
        <div className="wordListSection">
            <div className={listClass} id="list">
                <WordListItem
                    words={wordsArray}
                    gameStatus={props.gameStatus}
                    boggleAnswer={props.boggleAnswer}
                />
            </div>
            {props.renderInput ? renderInput() : null}
        </div>
    );
}
