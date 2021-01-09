import React, {useState} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import Board from '../Board/board';
import WordList from '../WordList/wordList';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { initGame, resetWordsList } from '../../actions';

import './secondPage.css';
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

export default function SecondPage(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const openModal = () => {
        setIsOpen(true);
    };
    
    const closeModal = () => {
        setIsOpen(false);
    };

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
                <Col xs={3}>
                    <WordList
                        array={props.boggleArray}
                        answers={boggleAnswer}
                        renderInput={false}
                    />
                </Col>
            </Row>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <Board array={props.boggleArray} />
            </Modal>
            <Row id="answers" center="lg">
                <Col xs={4}>
                    <Button id="viewBoard" onClick={openModal}>ViewBoard</Button>
                </Col>
            </Row>
        </div>
    );
}
