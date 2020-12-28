import React, { useEffect, useState } from 'react';
import Board from '../Board/board';
import RuleModal from '../RuleModal/ruleModal';
import WordList from '../WordList/wordList';
import TimerButton from '../TimerButton/timerButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './mainPage.css';

const boggle = require('pf-boggle');

export default function MainPage(props) {
    const allAnswer = boggle.solve(props.boggleArray);
    const boggleAnswer = allAnswer.filter((words) => words.word.length > 2);

    const [gameStatus, setGameStatus] = useState("init");

    const startGame = () => {
        setGameStatus('started');
        props.refreshBoard();
    };

    const stopGame = () => {
        setGameStatus('done');
    };

    return (
        <div id="mainWrap">
            <Row id="title" center="lg">
                BOGGLE
            </Row>
            <Row id="gameWrap">
                <Col xs={8}>
                    <Board array={props.boggleArray} gameStatus={gameStatus}/>
                </Col>
                <Col xs={4}>
                    <WordList array={props.boggleArray} />
                </Col>
            </Row>
            <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                    <div className="buttonWrap">
                        <TimerButton startAction={startGame} stopAction={stopGame} gameStatus={gameStatus}/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
