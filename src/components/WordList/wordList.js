import React, { useState } from 'react';
import WordListItem from '../WordListItem/wordListItem';
import './wordList.css';
import wordSearch from './wordSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addWord } from '../../actions';

const WordList = function (props) {
    //redux stuff
    const words = useSelector((state) => state.words);
    const gameStatus = useSelector((state) => state.gameStatus);
    const dispatch = useDispatch();

    const letters = props.array;
    const [inputValue, setInputValue] = useState('');
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
            !words.includes(inputValue) &&
            wordMakeable
        ) {
            dispatch(addWord(inputValue));
            setInputValue('');
            setPlaceHolder('');
            scrollToBottom();
        } else if (words.includes(inputValue)) {
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
                        disabled={gameStatus === 'started' ? false : true}
                        placeholder={placeHolder}
                    />
                </form>
            </div>
        );
    };

    return (
        <div className="wordListSection">
            <div className={listClass} id="list">
                <WordListItem answers={props.answers}/>
            </div>
            {props.renderInput ? renderInput() : null}
        </div>
    );
};

export default WordList;
