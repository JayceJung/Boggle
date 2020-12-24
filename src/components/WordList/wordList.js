import React, { useState } from 'react';
import WordListItem from '../WordListItem/wordListItem';
import './wordList.css';
import wordSearch from './wordSearch';

export default function WordList(props) {
    const letters = props.array;
    const [inputValue, setInputValue] = useState('');
    const [wordsArray, setWordsArray] = useState([]);
    const [placeHolder, setPlaceHolder] = useState('Enter words here!');

    const handleSubmit = (event) => {
        event.preventDefault();
        const wordMakeable = wordSearch(inputValue, letters);
        if (!wordMakeable) {
            setInputValue('');
            setPlaceHolder("That word can't be made!");
        } else if (
            inputValue != '' &&
            !wordsArray.includes(inputValue) &&
            wordMakeable
        ) {
            setWordsArray([...wordsArray, inputValue]);
            setInputValue('');
            setPlaceHolder('');
        } else if (wordsArray.includes(inputValue)) {
            setInputValue('');
            setPlaceHolder('This word is already in your list!');
        }
    };

    const handleChange = (value) => {
        if (/^[a-zA-Z]*$/g.test(value)) {
            setInputValue(value.toUpperCase());
        }
    };

    return (
        <div className="wordListSection">
            <div className="list">
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
                    {console.log(!wordsArray.includes('A'))}
                </form>
            </div>
        </div>
    );
}
