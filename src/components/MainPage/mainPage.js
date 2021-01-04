import React, { useEffect, useState } from 'react';
import Board from '../Board/board';
import RuleModal from '../RuleModal/ruleModal';
import Modal from 'react-modal';
import WordList from '../WordList/wordList';
import TimerButton from '../TimerButton/timerButton';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './mainPage.css';

const boggle = require('pf-boggle');
const customStyles = {
    content: {
        width: '70%',
        padding: '1% 3%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default function MainPage(props) {
    const allAnswer = boggle.solve(props.boggleArray);
    const boggleAnswer = allAnswer.filter((words) => words.word.length > 2);
    const [gameStatus, setGameStatus] = useState('init');
    const [modalIsOpen, setIsOpen] = useState(false);

    const startGame = () => {
        setGameStatus('started');
        props.refreshBoard();
    };

    const stopGame = () => {
        setGameStatus('done');
    };

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div id="mainWrap">
            <Row id="title" center="lg">
                <Col xs={3}></Col>
                <Col xs={6}>BOGGLE</Col>
                <Col xs={3} id="help">
                    <Button onClick={openModal}>How to play</Button>
                </Col>
            </Row>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <RuleModal />
            </Modal>
            <Row id="gameWrap">
                <Col xs={8}>
                    <Board array={props.boggleArray} gameStatus={gameStatus} />
                </Col>
                <Col xs={4}>
                    <WordList
                        array={props.boggleArray}
                        gameStatus={gameStatus}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={8}></Col>
                <Col xs={4}>
                    <div className="buttonWrap">
                        <TimerButton
                            startAction={startGame}
                            stopAction={stopGame}
                            gameStatus={gameStatus}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
