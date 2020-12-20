import React, { useEffect, useState } from 'react';
import Board from '../Board/board';
import RuleModal from '../RuleModal/ruleModal';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './mainPage.css';

const boggle = require('pf-boggle');

export default function MainPage() {
    const boggleArray = boggle.generate(4, boggle.diceSets['classic4']);
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function howToPlayModal() {
        return <RuleModal modalOpen={modalIsOpen}/>;
    }
    useEffect(() => {
        const boggleAnswer = boggle.solve(boggleArray);
        console.log('boggle Array:', boggleArray);
        console.log('boggle Answers: ', boggleAnswer);
    });

    return (
        <div id="mainWrap">
            <Row center>
                <Col id="help" xs={2}>
                    <div></div>
                </Col>
                <Col id="title" xs={8}>
                    BOGGLE
                </Col>
                <Col id="help" xs={1}>
                    <div onClick={howToPlayModal}>how to play</div>
                </Col>
            </Row>
            <Row id="gameWrap">
                <Col xs={8}>
                    <Board array={boggleArray} />
                </Col>
                <Col xs={4}>chat</Col>
            </Row>
        </div>
    );
}
