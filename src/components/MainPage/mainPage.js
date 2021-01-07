import React, { useState } from 'react';
import Board from '../Board/board';
import RuleModal from '../RuleModal/ruleModal';
import Modal from 'react-modal';
import WordList from '../WordList/wordList';
import TimerButton from '../TimerButton/timerButton';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import redoLogo from '../../images/redo.png';
import './mainPage.css';

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
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const resetBoard = () => {
        console.log("reset");
    }

    return (
        <div id="mainWrap">
            <Row id="title" center="lg">
                <Col xs={3}></Col>
                <Col xs={6}>BOGGLE</Col>
                <Col xs={3} id="help">
                    <Button id="howToPlayButton" onClick={openModal}>How to play</Button>
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
                    <WordList
                        array={props.boggleArray}
                        renderInput={true}
                    />
                </Col>
                <Col xs={1}>
                </Col>
            </Row>
            <Row>
                <Col xs={8}></Col>
                <Col xs={2}>
                    <div className="buttonWrap">
                        <TimerButton refreshBoard={props.refreshBoard} />
                    </div>
                </Col>
                <Col xs={1}>
                    <div className="newGameButtonWrap" onClick={resetBoard}>
                        <img id="redoLogo" src={redoLogo} alt="redo"/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
