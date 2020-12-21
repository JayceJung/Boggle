import React, { useEffect, useState } from 'react';
import Board from '../Board/board';
import RuleModal from '../RuleModal/ruleModal';
import WordList from '../WordList/wordList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './mainPage.css';

const boggle = require('pf-boggle');

export default function MainPage() {
    const boggleArray = boggle.generate(4, boggle.diceSets['classic4']);

    useEffect(() => {
        const boggleAnswer = boggle.solve(boggleArray);
    });

    return (
        <div id="mainWrap">
            <Row id="title" center="lg">
                BOGGLE
            </Row>
            <Row id="gameWrap">
                <Col xs={8}>
                    <Board array={boggleArray} />
                </Col>
                <Col xs={4}>
                    <WordList /*answers={need to get boggleAnswer as a prop for wordlist}*/
                    />
                </Col>
            </Row>
        </div>
    );
}
