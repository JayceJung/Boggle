import React, { useState } from 'react';
import WordListItem from '../WordListItem/wordListItem';
import './wordList.css';

export default function WordList(props) {
    /* const answers = props.answers; -- need to assign asnwers to the solved answers that are incoming */
    const [inputValue, setInputValue] = useState('');
    const [wordsArray, setWordsArray] = useState([]);
    const [placeHolder, setPlaceHolder] = useState('Enter words here!');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            inputValue != '' &&
            !wordsArray.includes(
                inputValue
            ) /* && answers.includes(inputValue) for error handling once asnwers are coming in through props*/
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
                </form>
            </div>
        </div>
    );
}
