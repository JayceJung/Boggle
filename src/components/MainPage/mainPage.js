import React, { useEffect, useState } from 'react';
import Board from '../Board/board';
import RuleModal from '../RuleModal/ruleModal';
import WordList from '../WordList/wordList';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Modal from 'react-modal';
import Table from 'react-bootstrap/Table';
import './mainPage.css';

const boggle = require('pf-boggle');

export default function MainPage() {
    const boggleArray = boggle.generate(4, boggle.diceSets['classic4']);
    const allAnswer = boggle.solve(boggleArray);
    const boggleAnswer = allAnswer.filter((words) => words.word.length > 2);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        console.log('actualAnswer: ', boggleAnswer);
    });

    function openModal() {
        setIsOpen(true);
        console.log('modalIsOpen: ', modalIsOpen);
    }

    function closeModal() {
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
            <RuleModal />
            <Row id="gameWrap">
                <Col xs={8}>
                    <Board array={boggleArray} />
                </Col>
                <Col xs={4}>
                    <WordList /*answer={boggleAnswer}*/ />
                </Col>
            </Row>
        </div>
    );
}
