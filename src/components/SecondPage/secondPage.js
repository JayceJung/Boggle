import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import WordList from '../WordList/wordList';
import { useDispatch } from 'react-redux';
import { initGame, resetWordsList } from '../../actions';
import './secondPage.css';
const boggle = require('pf-boggle');

export default function SecondPage(props) {
    const dispatch = useDispatch();

    const newGame = () => {
        dispatch(resetWordsList());
        dispatch(initGame());
    };

    const allAnswer = boggle.solve(props.boggleArray);
    const boggleAnswer = allAnswer.filter((words) => words.word.length > 2);

    return (
        <div id="mainWrap">
            <Row id="title" center="lg">
                <Col xs={3}></Col>
                <Col xs={6}>BOGGLE</Col>
                <Col xs={3} id="newGame">
                    <Button id="newGameButton" onClick={newGame}>
                        New Game
                    </Button>
                </Col>
            </Row>
            <Row id="answers" center="lg">
                <Col xs={5}>
                    <WordList
                        array={props.boggleArray}
                        answers={boggleAnswer}
                        renderInput={false}
                    />
                </Col>
            </Row>
            <Row id="answers" center="lg">
                <Col xs={4}>
                    <Button id="ViewBoard">ViewBoard</Button>
                </Col>
            </Row>
        </div>
    );
}
