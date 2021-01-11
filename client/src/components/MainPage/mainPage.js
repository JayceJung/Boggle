import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
import Board from '../Board/board';
import RuleModal from '../RuleModal/ruleModal';
import Modal from 'react-modal';
import WordList from '../WordList/wordList';
import TimerButton from '../TimerButton/timerButton';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import redoLogo from '../../images/redo.png';
import './mainPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { initGame, resetWordsList, animationStatusChange } from '../../actions';

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

const ENDPOINT = 'http://localhost:5000';

export default function MainPage(props) {
    const socket = socketIOClient(ENDPOINT, { transport: ['websocket'] });

    const [host, setHost] = useState(false);

    const gameStatus = useSelector((state) => state.gameStatus);
    const dispatch = useDispatch();
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    socket.emit('reqUserNumber');
    socket.on('incomingUserNumber', (number) => {
        console.log(number);
    });

    const resetBoard = () => {
        if (gameStatus === 'started') {
            dispatch(animationStatusChange());
            dispatch(resetWordsList());
            dispatch(initGame());
        }
    };

    return (
        <div id="mainWrap">
            <Row id="title" center="lg">
                <Col xs={3}></Col>
                <Col xs={6}>BOGGLE</Col>
                <Col xs={3} id="help">
                    <Button id="howToPlayButton" onClick={openModal}>
                        How to play
                    </Button>
                </Col>
            </Row>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <RuleModal />
            </Modal>
            <Row id="gameWrap">
                <Col xs={8}>
                    <Board array={props.boggleArray} />
                </Col>
                <Col xs={3}>
                    <WordList array={props.boggleArray} renderInput={true} />
                </Col>
                <Col xs={1}></Col>
            </Row>
            <Row>
                <Col xs={8}></Col>
                <Col xs={2}>
                    <div className="buttonWrap">
                        <TimerButton refreshBoard={props.refreshBoard} />
                    </div>
                </Col>
                <Col xs={1}>
                    {console.log(host)}
                    {host && (
                        <div
                            className="newGameButtonWrap"
                            onClick={resetBoard}
                            disable={gameStatus === 'init' ? true : false}
                        >
                            <img id="redoLogo" src={redoLogo} alt="redo" />
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
}
